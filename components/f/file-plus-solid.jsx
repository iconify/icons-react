import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6h1arbae.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t6h1arbae"/>`,
		"fallback": "teenyicons:file-plus-solid",
	});
}

export default Component;
