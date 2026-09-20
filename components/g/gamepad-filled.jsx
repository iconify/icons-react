import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvjr2x3go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mvjr2x3go"/>`,
		"fallback": "reicon:gamepad-filled",
	});
}

export default Component;
