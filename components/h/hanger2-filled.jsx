import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl_d6ch4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tl_d6ch4l"/>`,
		"fallback": "reicon:hanger2-filled",
	});
}

export default Component;
