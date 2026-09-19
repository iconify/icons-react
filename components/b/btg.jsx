import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdq5wv8mo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdq5wv8mo"/>`,
		"fallback": "cryptocurrency:btg",
	});
}

export default Component;
