import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oal5ot4fa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oal5ot4fa"/>`,
		"fallback": "streamline-plump:device-database-encryption-1-solid",
	});
}

export default Component;
