import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0x4f1bmf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n0x4f1bmf"/>`,
		"fallback": "heroicons:banknotes-20-solid",
	});
}

export default Component;
