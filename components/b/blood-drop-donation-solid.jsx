import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcui2o1_m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rcui2o1_m"/>`,
		"fallback": "streamline:blood-drop-donation-solid",
	});
}

export default Component;
