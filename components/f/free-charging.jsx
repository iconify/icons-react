import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wp6pz0b9c.css';
import '../../css/f/fpneqjbpl.css';
import '../../css/c/c6zd3b_8c.css';
import '../../css/g/g5prnvbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wp6pz0b9c"/><circle class="fpneqjbpl"/><path class="c6zd3b_8c"/><path class="g5prnvbkm"/></g>`,
		"fallback": "evicons:free-charging",
	});
}

export default Component;
