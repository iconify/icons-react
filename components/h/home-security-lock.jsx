import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wivg6zlgt.css';
import '../../css/z/z579v_o_z.css';
import '../../css/v/v4-iuhyyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wivg6zlgt"/><path class="z579v_o_z"/><path class="v4-iuhyyx"/></g>`,
		"fallback": "mage:home-security-lock",
	});
}

export default Component;
