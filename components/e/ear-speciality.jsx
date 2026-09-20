import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p7e386pec.css';
import '../../css/k/kpvoor6jx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p7e386pec"/><path class="kpvoor6jx"/></g>`,
		"fallback": "streamline-flex:ear-speciality",
	});
}

export default Component;
