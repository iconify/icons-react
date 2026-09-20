import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j416pfu1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j416pfu1z"/>`,
		"fallback": "streamline-sharp:fortune-telling-sphere-remix",
	});
}

export default Component;
