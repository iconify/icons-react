import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axwlv8_bk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axwlv8_bk"/>`,
		"fallback": "reicon:chart5-filled",
	});
}

export default Component;
