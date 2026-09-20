import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgcif9d1i.css';
import '../../css/j/jpcgvbsnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgcif9d1i"/><path class="jpcgvbsnx"/>`,
		"fallback": "tdesign:compass-1-filled",
	});
}

export default Component;
