import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2x1pjb-k.css';
import '../../css/q/qlez1nbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2x1pjb-k"/><path class="qlez1nbos"/>`,
		"fallback": "tdesign:folder-export-filled",
	});
}

export default Component;
