import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jegat8g5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jegat8g5l"/>`,
		"fallback": "streamline-sharp:customer-support-setting-remix",
	});
}

export default Component;
