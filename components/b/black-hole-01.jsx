import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wi26wtigi.css';
import '../../css/g/gu4atmwpg.css';
import '../../css/b/b59eeib2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><ellipse class="wi26wtigi"/><path class="gu4atmwpg"/><path class="b59eeib2c"/></g>`,
		"fallback": "hugeicons:black-hole-01",
	});
}

export default Component;
