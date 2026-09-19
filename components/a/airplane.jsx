import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa97h8b1r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa97h8b1r"/>`,
		"fallback": "icon-park:airplane",
	});
}

export default Component;
