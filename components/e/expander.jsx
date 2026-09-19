import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pllftbc0b.css';
import '../../css/u/u5sm2-17w.css';
import '../../css/d/dtewxowdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pllftbc0b"/><path class="u5sm2-17w"/><path class="dtewxowdh"/></g>`,
		"fallback": "hugeicons:expander",
	});
}

export default Component;
