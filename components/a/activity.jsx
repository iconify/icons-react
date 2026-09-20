import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/z/zhfvakbsb.css';
import '../../css/i/i1hpp1bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="zhfvakbsb"/><path class="i1hpp1bvk"/></g>`,
		"fallback": "tdesign:activity",
	});
}

export default Component;
