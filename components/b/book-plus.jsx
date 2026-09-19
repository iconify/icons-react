import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gd934o11m.css';
import '../../css/i/icjlvdb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gd934o11m"/><path class="icjlvdb0c"/></g>`,
		"fallback": "hugeicons:book-plus",
	});
}

export default Component;
