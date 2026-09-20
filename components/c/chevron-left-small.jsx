import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qphvnvb7w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qphvnvb7w"/>`,
		"fallback": "vaadin:chevron-left-small",
	});
}

export default Component;
