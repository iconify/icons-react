import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sig5-f5ft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sig5-f5ft"/>`,
		"fallback": "streamline-plump:ball-remix",
	});
}

export default Component;
