import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dzelc-e5b.css';
import '../../css/z/zfd2gccjj.css';
import '../../css/c/cmpqosb5j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dzelc-e5b"/><path class="zfd2gccjj"/><path class="cmpqosb5j"/></g>`,
		"fallback": "streamline-flex:dollar-increase",
	});
}

export default Component;
