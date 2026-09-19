import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afv-v0b1s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afv-v0b1s"/>`,
		"fallback": "carbon:chart-dual-y-axis",
	});
}

export default Component;
