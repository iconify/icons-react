import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d357irbtg.css';
import '../../css/t/tuels9bhh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d357irbtg"/><path class="tuels9bhh"/>`,
		"fallback": "cryptocurrency:drgn",
	});
}

export default Component;
