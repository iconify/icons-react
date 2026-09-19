import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgebjd7_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgebjd7_j"/>`,
		"fallback": "ci:house-01",
	});
}

export default Component;
