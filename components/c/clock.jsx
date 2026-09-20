import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i_4pwhevo.css';
import '../../css/t/tej2_5t1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i_4pwhevo"/><path class="tej2_5t1v"/></g>`,
		"fallback": "proicons:clock",
	});
}

export default Component;
