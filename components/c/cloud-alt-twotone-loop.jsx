import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztworh.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztworh"/>`,
		"fallback": "line-md:cloud-alt-twotone-loop",
	});
}

export default Component;
