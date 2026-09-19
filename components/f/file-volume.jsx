import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y5lvn6bif.css';
import '../../css/o/o5ka6gcqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y5lvn6bif"/><path class="o5ka6gcqh"/></g>`,
		"fallback": "hugeicons:file-volume",
	});
}

export default Component;
