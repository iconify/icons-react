import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fnibq2bka.css';
import '../../css/i/imjck5b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fnibq2bka"/><path class="imjck5b5e"/></g>`,
		"fallback": "hugeicons:file-type-corner",
	});
}

export default Component;
