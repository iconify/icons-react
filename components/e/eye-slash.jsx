import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj43_vuli.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj43_vuli"/>`,
		"fallback": "fa-solid:eye-slash",
	});
}

export default Component;
