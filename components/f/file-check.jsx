import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbj8p3c7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbj8p3c7q"/>`,
		"fallback": "griddy-icons:file-check",
	});
}

export default Component;
