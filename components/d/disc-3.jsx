import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/d/dhf1lvkya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="shu3xdl9q"/><circle class="h_tsn8bxt"/><path class="dhf1lvkya"/></g>`,
		"fallback": "hugeicons:disc-3",
	});
}

export default Component;
