import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovbjvnbio.css';
import '../../css/a/ap1lv70-j.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/v3xytbbit.css';
import '../../css/h/hf9nujbzq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovbjvnbio"/><path class="ap1lv70-j"/><g class="jn8qy4bru"><path class="v3xytbbit"/><path class="hf9nujbzq"/></g>`,
		"fallback": "openmoji:hippopotamus",
	});
}

export default Component;
