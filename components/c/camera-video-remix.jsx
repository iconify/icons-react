import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iirj12wnu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iirj12wnu"/>`,
		"fallback": "streamline-plump:camera-video-remix",
	});
}

export default Component;
