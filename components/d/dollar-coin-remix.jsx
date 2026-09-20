import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv-za9b3j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nv-za9b3j"/>`,
		"fallback": "streamline-plump:dollar-coin-remix",
	});
}

export default Component;
