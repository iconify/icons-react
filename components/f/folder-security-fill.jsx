import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqt7fdbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqt7fdbik"/>`,
		"fallback": "mingcute:folder-security-fill",
	});
}

export default Component;
