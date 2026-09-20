import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j73-8xbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j73-8xbrs"/>`,
		"fallback": "streamline-sharp:download-box-1-remix",
	});
}

export default Component;
