import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xcripvb-d.css';
import '../../css/q/qi9jmsbwa.css';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xcripvb-d"/><path class="qi9jmsbwa"/></g>`,
		"fallback": "thesvg-color:context7-light",
	});
}

export default Component;
