import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5mjcbcrt.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5mjcbcrt"/>`,
		"fallback": "memory:dot-octagon-fill",
	});
}

export default Component;
