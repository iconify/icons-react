import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vha0a8bey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vha0a8bey"/>`,
		"fallback": "streamline-sharp:fork-plate-remix",
	});
}

export default Component;
