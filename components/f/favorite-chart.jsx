import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zx9s66bso.css';
import '../../css/g/ghg6w1jbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zx9s66bso"/><path class="ghg6w1jbi"/></g>`,
		"fallback": "reicon:favorite-chart",
	});
}

export default Component;
