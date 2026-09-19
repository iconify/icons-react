import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vh271yb1c.css';
import '../../css/u/uthm9nomi.css';
import '../../css/d/dju3gg-oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vh271yb1c"/><path class="uthm9nomi"/><path class="dju3gg-oi"/></g>`,
		"fallback": "covid:covid19-virus-lifelong-1",
	});
}

export default Component;
