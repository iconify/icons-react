import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcfav3bjs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tcfav3bjs"/>`,
		"fallback": "heroicons-solid:document",
	});
}

export default Component;
