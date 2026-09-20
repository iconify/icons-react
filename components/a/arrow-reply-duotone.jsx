import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqjbbobhb.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/d_1kwjbmh.css';
import '../../css/o/oun0_yubu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGqfv97c4S" class="uqjbbobhb"/></defs><use href="#SVGqfv97c4S" class="mc2zb0bvp"/><use href="#SVGqfv97c4S" clip-rule="evenodd" class="d_1kwjbmh"/><path class="oun0_yubu"/>`,
		"fallback": "stash:arrow-reply-duotone",
	});
}

export default Component;
