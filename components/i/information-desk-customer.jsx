import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vdfihdvdo.css';
import '../../css/e/eda339blr.css';
import '../../css/p/p_by_acur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vdfihdvdo"/><path class="eda339blr"/><path class="p_by_acur"/></g>`,
		"fallback": "streamline:information-desk-customer",
	});
}

export default Component;
