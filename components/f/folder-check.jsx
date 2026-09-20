import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/iafhy2rfj.css';
import '../../css/b/bubv0wb-g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="iafhy2rfj"/><path class="bubv0wb-g"/></g>`,
		"fallback": "streamline:folder-check",
	});
}

export default Component;
