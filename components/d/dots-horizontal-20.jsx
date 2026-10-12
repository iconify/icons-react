import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug3_nnb3t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug3_nnb3t"/>`,
		"fallback": "garden:dots-horizontal-20",
	});
}

export default Component;
