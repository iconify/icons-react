import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgu-p0blh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cgu-p0blh"/>`,
		"fallback": "streamline-ultimate:checkup-diagnostic-bold",
	});
}

export default Component;
