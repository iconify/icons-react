import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/ponqslb1k.css';
import '../../css/b/bnednhb9a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ponqslb1k"/><path class="bnednhb9a"/></g>`,
		"fallback": "streamline:bug-antivirus-debugging",
	});
}

export default Component;
