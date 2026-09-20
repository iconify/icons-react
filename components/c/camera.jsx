import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ful1m9b_w.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ful1m9b_w"/>`,
		"fallback": "wpf:camera",
	});
}

export default Component;
