import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyv5sjoyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyv5sjoyq"/>`,
		"fallback": "octicon:device-camera-24",
	});
}

export default Component;
