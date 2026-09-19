import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zajvw9b4f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zajvw9b4f"/>`,
		"fallback": "dashicons:cloud-saved",
	});
}

export default Component;
