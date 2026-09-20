import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjwt4m9cs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sjwt4m9cs"/>`,
		"fallback": "streamline-plump:button-play-circle-remix",
	});
}

export default Component;
