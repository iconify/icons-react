import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e30xyqbhl.css';
import '../../css/e/eo16-t4xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e30xyqbhl"/><path class="eo16-t4xr"/></g>`,
		"fallback": "reicon:arrow-right3",
	});
}

export default Component;
