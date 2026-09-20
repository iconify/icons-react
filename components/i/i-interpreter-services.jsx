import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt4a0s1ni.css';
import '../../css/y/yedu7zb9a.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt4a0s1ni"/><path class="yedu7zb9a"/>`,
		"fallback": "medical-icon:i-interpreter-services",
	});
}

export default Component;
