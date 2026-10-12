import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jbfb7vb3x.css';
import '../../css/y/yg8n9nbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jbfb7vb3x"/><path class="yg8n9nbqw"/></g>`,
		"fallback": "andrsrxn:3d",
	});
}

export default Component;
