import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/ku0ep7ivy.css';
import '../../css/y/ye157f3yh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ku0ep7ivy"/><path class="ye157f3yh"/></g>`,
		"fallback": "hugeicons:fuel-02",
	});
}

export default Component;
