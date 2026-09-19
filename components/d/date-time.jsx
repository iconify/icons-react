import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fyjn6sbuz.css';
import '../../css/q/qnic43b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fyjn6sbuz"/><path class="qnic43b3h"/></g>`,
		"fallback": "hugeicons:date-time",
	});
}

export default Component;
