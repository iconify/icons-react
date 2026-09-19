import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/njissubgs.css';
import '../../css/m/m-rn69rtd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="njissubgs"/><path class="m-rn69rtd"/></g>`,
		"fallback": "fluent-emoji-flat:busts-in-silhouette",
	});
}

export default Component;
