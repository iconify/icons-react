import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuc_41kpy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fuc_41kpy"/>`,
		"fallback": "heroicons-solid:arrow-narrow-up",
	});
}

export default Component;
