import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz98m2akc.css';
import '../../css/k/kbbue1bxu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz98m2akc"/><path class="kbbue1bxu"/>`,
		"fallback": "ion:bus-sharp",
	});
}

export default Component;
