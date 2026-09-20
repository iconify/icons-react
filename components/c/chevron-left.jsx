import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gglh1cybb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gglh1cybb"/>`,
		"fallback": "vaadin:chevron-left",
	});
}

export default Component;
