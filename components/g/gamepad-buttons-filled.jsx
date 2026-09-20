import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw5h_935k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw5h_935k"/>`,
		"fallback": "reicon:gamepad-buttons-filled",
	});
}

export default Component;
