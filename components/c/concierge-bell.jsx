import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm5ogkonw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm5ogkonw"/>`,
		"fallback": "fa-solid:concierge-bell",
	});
}

export default Component;
