import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v29kbzb4t.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v29kbzb4t"/>`,
		"fallback": "pullo:bring-forward-light",
	});
}

export default Component;
