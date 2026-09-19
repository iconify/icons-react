import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg00pbb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg00pbb1w"/>`,
		"fallback": "cbi:bulb-group-centura-round",
	});
}

export default Component;
