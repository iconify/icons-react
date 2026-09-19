import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa-q0hbak.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa-q0hbak"/>`,
		"fallback": "fa6-solid:face-angry",
	});
}

export default Component;
