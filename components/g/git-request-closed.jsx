import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j78p-caua.css';
import '../../css/y/y56p--bum.css';
import '../../css/v/vutiidbtf.css';
import '../../css/p/p357q9zfx.css';
import '../../css/n/n79914brm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="j78p-caua"/><circle class="y56p--bum"/><circle class="vutiidbtf"/><path class="p357q9zfx"/><path class="n79914brm"/></g>`,
		"fallback": "charm:git-request-closed",
	});
}

export default Component;
