import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpvag-22g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpvag-22g"/>`,
		"fallback": "vaadin:ctrl",
	});
}

export default Component;
