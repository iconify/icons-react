import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0b4cdb4f.css';
import '../../css/t/towwv1e5k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0b4cdb4f"/><path class="towwv1e5k"/>`,
		"fallback": "vaadin:angle-double-left",
	});
}

export default Component;
