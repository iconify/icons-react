import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyya42sbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hyya42sbr"/>`,
		"fallback": "lineicons:facebook-square",
	});
}

export default Component;
