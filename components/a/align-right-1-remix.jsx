import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjso1ccoz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bjso1ccoz"/>`,
		"fallback": "streamline-plump:align-right-1-remix",
	});
}

export default Component;
