import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg6srub4t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg6srub4t"/>`,
		"fallback": "dashicons:editor-italic",
	});
}

export default Component;
