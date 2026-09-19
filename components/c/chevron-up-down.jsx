import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsxz30s9d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fsxz30s9d"/>`,
		"fallback": "heroicons-solid:chevron-up-down",
	});
}

export default Component;
