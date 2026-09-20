import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqft8hqej.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vqft8hqej"/>`,
		"fallback": "streamline-plump:border-frame-solid",
	});
}

export default Component;
