import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i31x4wb0q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i31x4wb0q"/>`,
		"fallback": "bi:cloud-hail-fill",
	});
}

export default Component;
