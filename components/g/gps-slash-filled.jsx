import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq8sby3jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq8sby3jw"/>`,
		"fallback": "reicon:gps-slash-filled",
	});
}

export default Component;
