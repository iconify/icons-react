import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvfg0bbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvfg0bbjv"/>`,
		"fallback": "cbi:delhivery",
	});
}

export default Component;
