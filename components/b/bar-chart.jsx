import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9jzi_09t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9jzi_09t"/>`,
		"fallback": "vaadin:bar-chart",
	});
}

export default Component;
