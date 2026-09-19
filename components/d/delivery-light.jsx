import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugb-_6bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugb-_6bbc"/>`,
		"fallback": "iconamoon:delivery-light",
	});
}

export default Component;
