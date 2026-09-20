import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edb__kdpj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edb__kdpj"/>`,
		"fallback": "vaadin:heart-o",
	});
}

export default Component;
