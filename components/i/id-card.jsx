import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pg5fd5b1w.css';
import '../../css/o/o97t9zbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pg5fd5b1w"/><path class="o97t9zbll"/></g>`,
		"fallback": "mage:id-card",
	});
}

export default Component;
