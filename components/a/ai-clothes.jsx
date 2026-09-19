import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l3qfs9-to.css';
import '../../css/y/y88h9kb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l3qfs9-to"/><path class="y88h9kb5u"/></g>`,
		"fallback": "hugeicons:ai-clothes",
	});
}

export default Component;
