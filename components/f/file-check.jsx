import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oni3gky3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oni3gky3v"/>`,
		"fallback": "noviair:file-check",
	});
}

export default Component;
