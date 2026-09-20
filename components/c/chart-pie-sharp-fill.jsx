import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pby7ywbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pby7ywbtc"/>`,
		"fallback": "keyline-icons:chart-pie-sharp-fill",
	});
}

export default Component;
