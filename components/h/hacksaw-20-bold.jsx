import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp42yhc0n.css';
import '../../css/m/mrws6bc9j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp42yhc0n"/><path class="mrws6bc9j"/>`,
		"fallback": "energy-icons:hacksaw-20-bold",
	});
}

export default Component;
