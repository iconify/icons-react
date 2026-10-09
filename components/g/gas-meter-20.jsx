import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyhbxz_1c.css';
import '../../css/u/u6fgoyb9s.css';
import '../../css/z/zh-hxsbiu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyhbxz_1c"/><path class="u6fgoyb9s"/><path class="zh-hxsbiu"/>`,
		"fallback": "energy-icons:gas-meter-20",
	});
}

export default Component;
