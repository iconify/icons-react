import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rg0y1cyif.css';
import '../../css/l/lwxrhtbij.css';
import '../../css/m/m4encacuk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rg0y1cyif"/><path class="lwxrhtbij"/><path class="m4encacuk"/></g>`,
		"fallback": "fluent-emoji-flat:bird",
	});
}

export default Component;
