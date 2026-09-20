import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp1v9ybmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sp1v9ybmm"/>`,
		"fallback": "streamline-sharp:hotel-bed-2-remix",
	});
}

export default Component;
