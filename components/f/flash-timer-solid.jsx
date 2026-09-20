import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7vp5_gqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a7vp5_gqt"/>`,
		"fallback": "streamline-sharp:flash-timer-solid",
	});
}

export default Component;
