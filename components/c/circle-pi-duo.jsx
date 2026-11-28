import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp_1auk9l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/l/lzz8rsb8x.css';
import '../../css/r/rn3jg9bjb.css';
import '../../css/g/g5z6ynbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp_1auk9l secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="lzz8rsb8x"/><path class="rn3jg9bjb"/><path class="g5z6ynbzg"/></g>`,
		"fallback": "iconaut:circle-pi-duo",
	});
}

export default Component;
