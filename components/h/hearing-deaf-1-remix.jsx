import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn9uzzb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rn9uzzb_d"/>`,
		"fallback": "streamline-sharp:hearing-deaf-1-remix",
	});
}

export default Component;
