import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye19x6bey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ye19x6bey"/>`,
		"fallback": "streamline-sharp:gift-2-remix",
	});
}

export default Component;
