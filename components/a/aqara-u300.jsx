import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyndspb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyndspb6b"/>`,
		"fallback": "cbi:aqara-u300",
	});
}

export default Component;
