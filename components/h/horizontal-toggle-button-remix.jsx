import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qodun26ov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qodun26ov"/>`,
		"fallback": "streamline-sharp:horizontal-toggle-button-remix",
	});
}

export default Component;
