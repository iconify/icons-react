import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-7so2bbd.css';
import '../../css/n/nna3xilgb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-7so2bbd"/><path class="nna3xilgb"/>`,
		"fallback": "maki:car-repair-15",
	});
}

export default Component;
