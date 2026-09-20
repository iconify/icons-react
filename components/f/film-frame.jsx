import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skeod9bve.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="skeod9bve"/>`,
		"fallback": "pepicons-pencil:film-frame",
	});
}

export default Component;
