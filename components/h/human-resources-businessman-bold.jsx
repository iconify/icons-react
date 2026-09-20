import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzud-bbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzud-bbvv"/>`,
		"fallback": "streamline-ultimate:human-resources-businessman-bold",
	});
}

export default Component;
