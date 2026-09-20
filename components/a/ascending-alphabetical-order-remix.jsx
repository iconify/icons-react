import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imwczwb1j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="imwczwb1j"/>`,
		"fallback": "streamline-plump:ascending-alphabetical-order-remix",
	});
}

export default Component;
