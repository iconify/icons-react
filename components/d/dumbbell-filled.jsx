import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pirddwb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pirddwb3a"/>`,
		"fallback": "reicon:dumbbell-filled",
	});
}

export default Component;
