import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/u/uqazr46ca.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="yph-txb3i"/><path class="uqazr46ca"/></g>`,
		"fallback": "streamline:computer-keyboard-previous-2-previous-keyboard-arrow-left",
	});
}

export default Component;
