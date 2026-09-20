import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v9if1obeg.css';
import '../../css/c/c020a4bmu.css';
import '../../css/t/tef83mb6y.css';
import '../../css/f/fvxtvob6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v9if1obeg"/><path class="c020a4bmu"/><path class="tef83mb6y"/><path class="fvxtvob6j"/></g>`,
		"fallback": "solar:cup-paper-line-duotone",
	});
}

export default Component;
