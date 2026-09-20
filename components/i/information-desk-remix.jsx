import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe5lb9btn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fe5lb9btn"/>`,
		"fallback": "streamline-plump:information-desk-remix",
	});
}

export default Component;
