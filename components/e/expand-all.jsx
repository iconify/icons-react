import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyl2igb8p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyl2igb8p"/>`,
		"fallback": "carbon:expand-all",
	});
}

export default Component;
