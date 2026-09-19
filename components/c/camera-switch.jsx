import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1u6ybcci.css';
import '../../css/s/s_wtzvbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1u6ybcci"/><path class="s_wtzvbxc"/>`,
		"fallback": "boxicons:camera-switch",
	});
}

export default Component;
