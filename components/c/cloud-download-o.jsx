import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-k3b0q2n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-k3b0q2n"/>`,
		"fallback": "vaadin:cloud-download-o",
	});
}

export default Component;
