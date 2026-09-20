import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-qx6zk0d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-qx6zk0d"/>`,
		"fallback": "streamline-plump:announcement-megaphone-solid",
	});
}

export default Component;
