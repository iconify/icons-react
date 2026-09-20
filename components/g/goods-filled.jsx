import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr38msbnw.css';
import '../../css/h/h_c37acgj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nr38msbnw"/><path class="h_c37acgj"/>`,
		"fallback": "lsicon:goods-filled",
	});
}

export default Component;
