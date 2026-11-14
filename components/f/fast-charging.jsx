import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i1oqsibdl.css';
import '../../css/o/o-9x-bcna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i1oqsibdl"/><path class="o-9x-bcna"/></g>`,
		"fallback": "evicons:fast-charging",
	});
}

export default Component;
