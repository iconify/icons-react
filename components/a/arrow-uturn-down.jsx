import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za1v4_t6b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="za1v4_t6b"/>`,
		"fallback": "heroicons-solid:arrow-uturn-down",
	});
}

export default Component;
