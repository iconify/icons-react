import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij9xh8x8m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ij9xh8x8m"/>`,
		"fallback": "heroicons-solid:hand-raised",
	});
}

export default Component;
