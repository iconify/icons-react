import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv_-h5b2m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nv_-h5b2m"/>`,
		"fallback": "heroicons:document-chart-bar-16-solid",
	});
}

export default Component;
