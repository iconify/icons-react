import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmao38p7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wmao38p7g"/>`,
		"fallback": "streamline-sharp:button-power-circle-1-remix",
	});
}

export default Component;
