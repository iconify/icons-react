import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h5x05rpbj.css';
import '../../css/n/n9xq3dbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h5x05rpbj"/><path class="n9xq3dbxh"/></g>`,
		"fallback": "hugeicons:folder-pen",
	});
}

export default Component;
