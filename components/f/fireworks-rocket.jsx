import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e-lc_ibzz.css';
import '../../css/n/n0xfegbpe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e-lc_ibzz"/><path class="n0xfegbpe"/></g>`,
		"fallback": "streamline:fireworks-rocket",
	});
}

export default Component;
