import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n72q2mb6a.css';
import '../../css/q/q_b-6hmia.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n72q2mb6a"/><path class="q_b-6hmia"/></g>`,
		"fallback": "charm:cast",
	});
}

export default Component;
