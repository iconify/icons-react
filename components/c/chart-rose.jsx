import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-7nv8f5f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-7nv8f5f"/>`,
		"fallback": "carbon:chart-rose",
	});
}

export default Component;
