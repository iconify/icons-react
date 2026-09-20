import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b34_7zbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b34_7zbms"/>`,
		"fallback": "reicon:cart5-filled",
	});
}

export default Component;
