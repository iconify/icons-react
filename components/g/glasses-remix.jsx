import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd931_gmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yd931_gmx"/>`,
		"fallback": "streamline-sharp:glasses-remix",
	});
}

export default Component;
