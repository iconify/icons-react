import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a8axvdbak.css';
import '../../css/u/u09qwnbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a8axvdbak"/><path class="u09qwnbtf"/></g>`,
		"fallback": "solar:arrow-down-to-line-linear",
	});
}

export default Component;
