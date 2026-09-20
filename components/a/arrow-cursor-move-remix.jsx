import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoym41box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eoym41box"/>`,
		"fallback": "streamline-sharp:arrow-cursor-move-remix",
	});
}

export default Component;
