import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puwrn1bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puwrn1bpq"/>`,
		"fallback": "boxicons:card-view-large",
	});
}

export default Component;
