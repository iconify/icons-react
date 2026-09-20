import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moee6dvip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moee6dvip"/>`,
		"fallback": "keyline-icons:bar-chart-2-sharp",
	});
}

export default Component;
