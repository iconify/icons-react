import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2r9gabou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o2r9gabou"/>`,
		"fallback": "streamline-sharp:graph-arrow-user-increase-remix",
	});
}

export default Component;
