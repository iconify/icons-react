import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwlsvo1ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hwlsvo1ve"/>`,
		"fallback": "streamline-sharp:decent-work-and-economic-growth-remix",
	});
}

export default Component;
