import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlzy1_b2o.css';
import '../../css/h/hv0axw6am.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlzy1_b2o"/><path class="hv0axw6am"/>`,
		"fallback": "garden:eraser-fill-16",
	});
}

export default Component;
