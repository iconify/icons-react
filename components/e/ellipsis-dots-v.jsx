import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-89cbbzg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-89cbbzg"/>`,
		"fallback": "vaadin:ellipsis-dots-v",
	});
}

export default Component;
