import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-smipu6k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-smipu6k"/>`,
		"fallback": "pinhead:dog-sitting-wearing-harness",
	});
}

export default Component;
