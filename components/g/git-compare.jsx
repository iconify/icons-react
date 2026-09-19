import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j78p-caua.css';
import '../../css/v/vutiidbtf.css';
import '../../css/c/ck9sfsb3t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="j78p-caua"/><circle class="vutiidbtf"/><path class="ck9sfsb3t"/></g>`,
		"fallback": "charm:git-compare",
	});
}

export default Component;
