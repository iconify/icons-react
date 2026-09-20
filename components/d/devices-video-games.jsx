import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvj_-bb6y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kvj_-bb6y"/>`,
		"fallback": "streamline-block:devices-video-games",
	});
}

export default Component;
