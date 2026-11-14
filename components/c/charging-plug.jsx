import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yufvkxaxa.css';
import '../../css/o/onqg-3bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="yufvkxaxa"/><path class="onqg-3bbh"/></g>`,
		"fallback": "evicons:charging-plug",
	});
}

export default Component;
