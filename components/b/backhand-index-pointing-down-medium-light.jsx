import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ammg21y8z.css';
import '../../css/g/glm6tvnou.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ammg21y8z"/><path clip-rule="evenodd" class="glm6tvnou"/></g>`,
		"fallback": "fluent-emoji-flat:backhand-index-pointing-down-medium-light",
	});
}

export default Component;
