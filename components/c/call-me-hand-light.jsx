import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f30jyq8yi.css';
import '../../css/a/ajl6qzbqb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f30jyq8yi"/><path class="ajl6qzbqb"/></g>`,
		"fallback": "fluent-emoji-flat:call-me-hand-light",
	});
}

export default Component;
