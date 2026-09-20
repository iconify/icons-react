import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmafcacme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmafcacme"/>`,
		"fallback": "token:fuse",
	});
}

export default Component;
