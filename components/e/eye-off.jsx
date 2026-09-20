import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t-q5rvtkb.css';
import '../../css/v/vux12ouym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t-q5rvtkb"/><path class="vux12ouym"/></g>`,
		"fallback": "mage:eye-off",
	});
}

export default Component;
