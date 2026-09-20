import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugiwfub4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugiwfub4n"/>`,
		"fallback": "mdi:battery-60-bluetooth",
	});
}

export default Component;
