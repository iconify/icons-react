import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qie1qfb-b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qie1qfb-b"/>`,
		"fallback": "carbon:category",
	});
}

export default Component;
