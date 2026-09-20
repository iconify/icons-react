import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygyfef5pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ygyfef5pg"/>`,
		"fallback": "reicon:camera-record-filled",
	});
}

export default Component;
