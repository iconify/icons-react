import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7rf6wbpp.css';
import '../../css/z/zw73vj3qq.css';
import '../../css/z/zg1pvabjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7rf6wbpp"/><path class="zw73vj3qq"/><path class="zg1pvabjx"/></g>`,
		"fallback": "lucide-extended:folder-closed-duotone",
	});
}

export default Component;
