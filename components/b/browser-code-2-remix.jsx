import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcd4puj4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pcd4puj4d"/>`,
		"fallback": "streamline-sharp:browser-code-2-remix",
	});
}

export default Component;
