import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrm7coa1q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qrm7coa1q"/>`,
		"fallback": "streamline:front-camera-remix",
	});
}

export default Component;
