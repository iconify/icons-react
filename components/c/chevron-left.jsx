import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elhba7y3r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="elhba7y3r"/>`,
		"fallback": "heroicons-solid:chevron-left",
	});
}

export default Component;
