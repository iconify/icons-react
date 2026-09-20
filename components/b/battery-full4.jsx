import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h811tfbzn.css';
import '../../css/y/yet1yl0tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h811tfbzn"/><path class="yet1yl0tb"/></g>`,
		"fallback": "reicon:battery-full4",
	});
}

export default Component;
