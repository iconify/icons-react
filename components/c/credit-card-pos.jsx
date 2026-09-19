import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ovsdc6bkd.css';
import '../../css/r/rymh20rko.css';
import '../../css/o/o05ivylqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ovsdc6bkd"/><path class="rymh20rko"/><path class="o05ivylqa"/></g>`,
		"fallback": "hugeicons:credit-card-pos",
	});
}

export default Component;
