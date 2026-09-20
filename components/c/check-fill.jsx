import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyekt5j2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qyekt5j2m"/>`,
		"fallback": "lets-icons:check-fill",
	});
}

export default Component;
