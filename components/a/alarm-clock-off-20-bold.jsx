import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asornzyio.css';
import '../../css/e/elstku5yi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asornzyio"/><path class="elstku5yi"/>`,
		"fallback": "energy-icons:alarm-clock-off-20-bold",
	});
}

export default Component;
