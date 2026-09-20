import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgtah-2oe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cgtah-2oe"/>`,
		"fallback": "streamline-plump:eye-optic-remix",
	});
}

export default Component;
