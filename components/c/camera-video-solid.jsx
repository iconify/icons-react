import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbuq71bwp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bbuq71bwp"/>`,
		"fallback": "streamline-plump:camera-video-solid",
	});
}

export default Component;
