import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu-7yvbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu-7yvbra"/>`,
		"fallback": "keyline-icons:chart-column-big-sharp",
	});
}

export default Component;
