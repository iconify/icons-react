import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7d0msb-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w7d0msb-w"/>`,
		"fallback": "streamline-plump:fit-height-remix",
	});
}

export default Component;
