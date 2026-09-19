import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb7rgwp0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb7rgwp0z"/>`,
		"fallback": "heroicons:archive-box-x-mark",
	});
}

export default Component;
