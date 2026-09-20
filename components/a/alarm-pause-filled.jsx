import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vubu2cchl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vubu2cchl"/>`,
		"fallback": "reicon:alarm-pause-filled",
	});
}

export default Component;
