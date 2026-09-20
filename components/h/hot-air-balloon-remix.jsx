import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvp70pb8r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dvp70pb8r"/>`,
		"fallback": "streamline-plump:hot-air-balloon-remix",
	});
}

export default Component;
