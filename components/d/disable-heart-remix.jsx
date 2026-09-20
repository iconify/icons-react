import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbew85u1z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cbew85u1z"/>`,
		"fallback": "streamline-plump:disable-heart-remix",
	});
}

export default Component;
