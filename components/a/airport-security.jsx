import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kcl9qjuqy.css';
import '../../css/b/bfp_z3bis.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kcl9qjuqy"/><path class="bfp_z3bis"/></g>`,
		"fallback": "streamline:airport-security",
	});
}

export default Component;
