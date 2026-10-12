import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dvnfzqq6y.css';
import '../../css/s/s6wz7jb9u.css';
import '../../css/v/vo-75nb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dvnfzqq6y"/><path class="s6wz7jb9u"/><path class="vo-75nb8v"/></g>`,
		"fallback": "andrsrxn:arrow-start-dot",
	});
}

export default Component;
