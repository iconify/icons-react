import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ka-8-vbus.css';
import '../../css/i/igx4j_blb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ka-8-vbus"/><path class="igx4j_blb"/></g>`,
		"fallback": "fluent-emoji-flat:carpentry-saw",
	});
}

export default Component;
