import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dsdz8zbww.css';
import '../../css/t/tkghq5bjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dsdz8zbww"/><path class="tkghq5bjm"/></g>`,
		"fallback": "mage:heart-health",
	});
}

export default Component;
