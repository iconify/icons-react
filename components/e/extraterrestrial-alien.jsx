import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxpolhb6w.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxpolhb6w"/>`,
		"fallback": "dinkie-icons:extraterrestrial-alien",
	});
}

export default Component;
