import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v78bxlboa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v78bxlboa"/>`,
		"fallback": "heroicons-solid:document-arrow-down",
	});
}

export default Component;
