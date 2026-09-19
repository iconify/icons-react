import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv-3-ac2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv-3-ac2k"/>`,
		"fallback": "boxicons:bolt-alt-filled",
	});
}

export default Component;
