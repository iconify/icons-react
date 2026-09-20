import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atjgvvjuh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="atjgvvjuh"/>`,
		"fallback": "streamline-plump:circle-and-square-shape-solid",
	});
}

export default Component;
