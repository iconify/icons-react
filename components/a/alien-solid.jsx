import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp2-90bsy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vp2-90bsy"/>`,
		"fallback": "streamline-plump:alien-solid",
	});
}

export default Component;
