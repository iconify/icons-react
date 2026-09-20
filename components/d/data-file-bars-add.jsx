import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dyo27qb8m.css';
import '../../css/s/s1d6m6bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dyo27qb8m"/><path class="s1d6m6bqv"/></g>`,
		"fallback": "streamline-ultimate:data-file-bars-add",
	});
}

export default Component;
