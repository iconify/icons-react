import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njf8bp8mn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="njf8bp8mn"/>`,
		"fallback": "streamline-plump:horizontal-menu-circle-remix",
	});
}

export default Component;
