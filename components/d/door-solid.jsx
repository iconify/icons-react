import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww36-hbxl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ww36-hbxl"/>`,
		"fallback": "streamline-plump:door-solid",
	});
}

export default Component;
