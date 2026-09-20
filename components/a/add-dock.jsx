import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8y6igb8k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8y6igb8k"/>`,
		"fallback": "vaadin:add-dock",
	});
}

export default Component;
