import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xboe5vb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xboe5vb1g"/>`,
		"fallback": "octicon:heart-fill-24",
	});
}

export default Component;
