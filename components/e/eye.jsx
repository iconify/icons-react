import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/f4-hall_c.css';
import '../../css/a/a2yusv--h.css';
import '../../css/e/exydi1bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="f4-hall_c"/><path class="a2yusv--h"/><path class="exydi1bdu"/></g>`,
		"fallback": "matita:eye",
	});
}

export default Component;
