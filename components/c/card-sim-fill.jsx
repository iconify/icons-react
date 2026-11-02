import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvm67acjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvm67acjv"/>`,
		"fallback": "mingcute:card-sim-fill",
	});
}

export default Component;
