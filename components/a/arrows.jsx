import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm0gbtz0j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm0gbtz0j"/>`,
		"fallback": "vaadin:arrows",
	});
}

export default Component;
