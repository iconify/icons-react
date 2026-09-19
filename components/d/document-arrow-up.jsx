import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twgt3wb7l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="twgt3wb7l"/>`,
		"fallback": "heroicons-solid:document-arrow-up",
	});
}

export default Component;
