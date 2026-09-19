import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrbl_6kht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrbl_6kht"/>`,
		"fallback": "game-icons:arrest",
	});
}

export default Component;
