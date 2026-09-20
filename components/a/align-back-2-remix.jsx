import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc6ecmbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pc6ecmbam"/>`,
		"fallback": "streamline-sharp:align-back-2-remix",
	});
}

export default Component;
