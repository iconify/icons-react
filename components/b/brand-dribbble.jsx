import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vb7n012lj.css';
import '../../css/b/btio96l9r.css';
import '../../css/n/nddx8oj7d.css';
import '../../css/j/j-c75gbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vb7n012lj"/><path class="btio96l9r"/><path class="nddx8oj7d"/><path class="j-c75gbby"/></g>`,
		"fallback": "mynaui:brand-dribbble",
	});
}

export default Component;
