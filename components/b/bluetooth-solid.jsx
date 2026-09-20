import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prwk1vbhh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="prwk1vbhh"/>`,
		"fallback": "streamline-plump:bluetooth-solid",
	});
}

export default Component;
