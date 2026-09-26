import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u09qwnbtf.css';
import '../../css/p/p-1nc6b6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u09qwnbtf"/><path class="p-1nc6b6p"/></g>`,
		"fallback": "solar:arrow-down-to-line-broken",
	});
}

export default Component;
