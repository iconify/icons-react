import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1o22uoyp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1o22uoyp"/>`,
		"fallback": "dinkie-icons:flying-saucer",
	});
}

export default Component;
