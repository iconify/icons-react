import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5vn8bclx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o5vn8bclx"/>`,
		"fallback": "ix:frames-filled",
	});
}

export default Component;
