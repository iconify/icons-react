import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vthn-7s8a.css';
import '../../css/j/jg8edzpch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vthn-7s8a"/><path class="jg8edzpch"/></g>`,
		"fallback": "iconaut:exclude",
	});
}

export default Component;
