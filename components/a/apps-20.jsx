import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi9ifmbzr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi9ifmbzr"/>`,
		"fallback": "energy-icons:apps-20",
	});
}

export default Component;
