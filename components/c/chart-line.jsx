import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw9u8dbku.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw9u8dbku"/>`,
		"fallback": "carbon:chart-line",
	});
}

export default Component;
