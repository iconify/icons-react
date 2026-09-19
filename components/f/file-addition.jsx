import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8-v5vbxi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8-v5vbxi"/>`,
		"fallback": "icon-park-outline:file-addition",
	});
}

export default Component;
