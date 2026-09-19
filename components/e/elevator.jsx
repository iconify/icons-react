import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9lsjlp9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9lsjlp9e"/>`,
		"fallback": "griddy-icons:elevator",
	});
}

export default Component;
