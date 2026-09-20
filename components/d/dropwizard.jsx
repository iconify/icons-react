import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgyi2j3xy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgyi2j3xy"/>`,
		"fallback": "thesvg:dropwizard",
	});
}

export default Component;
