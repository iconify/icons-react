import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc_avxy5i.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc_avxy5i"/>`,
		"fallback": "fa-regular:hand-point-up",
	});
}

export default Component;
