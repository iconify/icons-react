import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw5vd4_bo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tw5vd4_bo"/>`,
		"fallback": "streamline-plump:cog-1-remix",
	});
}

export default Component;
