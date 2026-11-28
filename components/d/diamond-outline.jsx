import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sltei3bqz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sltei3bqz"/>`,
		"fallback": "pinhead:diamond-outline",
	});
}

export default Component;
