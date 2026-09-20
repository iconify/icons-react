import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfc3tf98d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wfc3tf98d"/>`,
		"fallback": "streamline-sharp-color:filter-2-flat",
	});
}

export default Component;
