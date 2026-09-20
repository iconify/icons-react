import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8jqnbbwi.css';
import '../../css/y/yowi3yb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q8jqnbbwi"/><path class="yowi3yb2c"/></g>`,
		"fallback": "si:ai-archive-duotone",
	});
}

export default Component;
