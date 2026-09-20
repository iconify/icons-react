import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_ruc1bdt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_ruc1bdt"/>`,
		"fallback": "qlementine-icons:chevron-right-12",
	});
}

export default Component;
