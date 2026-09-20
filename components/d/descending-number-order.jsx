import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/y/y-mtz-ngn.css';
import '../../css/g/gqzuxer4s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="y-mtz-ngn"/><path class="gqzuxer4s"/></g>`,
		"fallback": "streamline-color:descending-number-order",
	});
}

export default Component;
