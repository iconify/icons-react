import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8mordb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o8mordb0y"/>`,
		"fallback": "solar:file-stack-outline",
	});
}

export default Component;
