import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6e3mnbvk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x6e3mnbvk"/>`,
		"fallback": "pepicons-pencil:hand-point",
	});
}

export default Component;
