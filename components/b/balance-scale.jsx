import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xe53owbmy.css';
import '../../css/m/mny45xb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="xe53owbmy"/><path class="mny45xb4m"/></g>`,
		"fallback": "hugeicons:balance-scale",
	});
}

export default Component;
