import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8dcjwbei.css';
import '../../css/d/di5phmx8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b x8dcjwbei"/><path class="b di5phmx8m"/>`,
		"fallback": "boxicons:camera-alt-filled",
	});
}

export default Component;
