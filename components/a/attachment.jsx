import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_ao4bbah.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_ao4bbah"/>`,
		"fallback": "icomoon-free:attachment",
	});
}

export default Component;
