import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpe1df_uk.css';
import '../../css/q/q94q71bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpe1df_uk"/><path class="q94q71bdd"/>`,
		"fallback": "bx:bx-slider-alt",
	});
}

export default Component;
