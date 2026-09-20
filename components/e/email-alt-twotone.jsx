import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aioz4a.css';
import '../../css/a/a0m25c.css';
import '../../css/l/lew-ud.css';
import '../../css/l/lufy5p.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aioz4a"/><path class="a0m25c lew-ud"/><path class="a0m25c lufy5p"/>`,
		"fallback": "line-md:email-alt-twotone",
	});
}

export default Component;
