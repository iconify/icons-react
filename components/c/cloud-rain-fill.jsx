import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhev3rlpw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhev3rlpw"/>`,
		"fallback": "bi:cloud-rain-fill",
	});
}

export default Component;
