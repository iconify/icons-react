import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jnbn-db6q.css';
import '../../css/e/e3ygp-bfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jnbn-db6q"/><path class="e3ygp-bfz"/></g>`,
		"fallback": "mynaui:crop",
	});
}

export default Component;
