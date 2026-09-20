import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/t/tbrf4r.css';
import '../../css/g/gsw2zd.css';
import '../../css/f/fill-from-0_3.css';
import '../../css/s/so-to-14.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c tbrf4r"/><path class="a0m25c gsw2zd"/>`,
		"fallback": "line-md:confirm-square-twotone-to-square-transition",
	});
}

export default Component;
