import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfc8fdb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfc8fdb5y"/>`,
		"fallback": "mdi:delete-restore",
	});
}

export default Component;
