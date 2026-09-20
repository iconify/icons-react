import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbcpo2p3v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dbcpo2p3v"/>`,
		"fallback": "streamline-flex:airship-solid",
	});
}

export default Component;
