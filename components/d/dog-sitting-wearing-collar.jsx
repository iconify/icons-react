import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km0y7xdxb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km0y7xdxb"/>`,
		"fallback": "pinhead:dog-sitting-wearing-collar",
	});
}

export default Component;
