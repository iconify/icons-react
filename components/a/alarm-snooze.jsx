import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbbhirtib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbbhirtib"/>`,
		"fallback": "streamline-cyber:alarm-snooze",
	});
}

export default Component;
