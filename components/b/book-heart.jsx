import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/icjlvdb0c.css';
import '../../css/p/peqzliwob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="icjlvdb0c"/><path class="peqzliwob"/></g>`,
		"fallback": "hugeicons:book-heart",
	});
}

export default Component;
