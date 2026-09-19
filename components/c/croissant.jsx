import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vjuwjpbva.css';
import '../../css/u/u6380db6s.css';
import '../../css/g/g-903w19m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vjuwjpbva"/><path class="u6380db6s"/><path class="g-903w19m"/></g>`,
		"fallback": "fluent-emoji-flat:croissant",
	});
}

export default Component;
