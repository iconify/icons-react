import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flc0i3bca.css';
import '../../css/l/l8ko_sw9f.css';
import '../../css/f/fc6kyk_co.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="flc0i3bca"/><path class="l8ko_sw9f"/><path class="fc6kyk_co"/></g>`,
		"fallback": "fluent-emoji-flat:crayon",
	});
}

export default Component;
