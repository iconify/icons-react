import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uke6mih8g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uke6mih8g"/>`,
		"fallback": "streamline-plump:broken-link-2-remix",
	});
}

export default Component;
