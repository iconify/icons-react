import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwbdgq.css';
import '../../css/s/so-from-76.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwbdgq"/>`,
		"fallback": "line-md:bluesky",
	});
}

export default Component;
