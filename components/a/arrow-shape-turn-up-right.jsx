import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axful0b4w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="axful0b4w"/>`,
		"fallback": "gravity-ui:arrow-shape-turn-up-right",
	});
}

export default Component;
