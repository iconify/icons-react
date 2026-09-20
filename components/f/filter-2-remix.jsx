import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axu4wiuad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="axu4wiuad"/>`,
		"fallback": "streamline-sharp:filter-2-remix",
	});
}

export default Component;
