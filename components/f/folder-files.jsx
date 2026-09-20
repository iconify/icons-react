import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd1c41b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qd1c41b1t"/>`,
		"fallback": "reicon:folder-files",
	});
}

export default Component;
