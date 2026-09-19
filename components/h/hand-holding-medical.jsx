import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzkpz1bdj.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzkpz1bdj"/>`,
		"fallback": "fa-solid:hand-holding-medical",
	});
}

export default Component;
