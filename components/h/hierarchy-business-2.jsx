import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur0h5ubxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur0h5ubxx"/>`,
		"fallback": "streamline-cyber:hierarchy-business-2",
	});
}

export default Component;
