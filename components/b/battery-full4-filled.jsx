import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjf-gv2gu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjf-gv2gu"/>`,
		"fallback": "reicon:battery-full4-filled",
	});
}

export default Component;
