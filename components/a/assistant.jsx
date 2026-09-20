import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4l3g20lh.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4l3g20lh"/>`,
		"fallback": "wpf:assistant",
	});
}

export default Component;
