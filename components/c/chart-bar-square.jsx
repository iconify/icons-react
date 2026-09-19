import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnz-a4ldz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pnz-a4ldz"/>`,
		"fallback": "heroicons-solid:chart-bar-square",
	});
}

export default Component;
