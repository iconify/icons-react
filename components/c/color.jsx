import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmp48z4el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmp48z4el"/>`,
		"fallback": "ci:color",
	});
}

export default Component;
