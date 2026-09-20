import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1-5195me.css';
import '../../css/w/wyynnt73k.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1-5195me"/><path class="wyynnt73k"/>`,
		"fallback": "lineicons:apartment",
	});
}

export default Component;
