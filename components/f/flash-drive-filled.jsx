import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq7_izb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iq7_izb3i"/>`,
		"fallback": "reicon:flash-drive-filled",
	});
}

export default Component;
