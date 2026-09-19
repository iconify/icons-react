import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qsp-hpgvx.css';
import '../../css/h/hijehvb8h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qsp-hpgvx"/><path clip-rule="evenodd" class="hijehvb8h"/></g>`,
		"fallback": "fluent-emoji-flat:backhand-index-pointing-down-medium-dark",
	});
}

export default Component;
