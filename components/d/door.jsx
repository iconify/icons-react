import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouu07fbcz.css';
import '../../css/b/b4pib-her.css';
import '../../css/l/lwkg79c0y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ouu07fbcz"/><path class="b4pib-her"/><path class="lwkg79c0y"/></g>`,
		"fallback": "fluent-emoji-flat:door",
	});
}

export default Component;
