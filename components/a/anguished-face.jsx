import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/f/f5tq5acha.css';
import '../../css/g/gkkfz1eci.css';
import '../../css/d/dl1zv1oyr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="f5tq5acha"/><path class="gkkfz1eci"/><path class="dl1zv1oyr"/></g>`,
		"fallback": "fluent-emoji-flat:anguished-face",
	});
}

export default Component;
