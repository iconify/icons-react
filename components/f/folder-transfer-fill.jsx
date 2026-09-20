import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo-b3efua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo-b3efua"/>`,
		"fallback": "ri:folder-transfer-fill",
	});
}

export default Component;
