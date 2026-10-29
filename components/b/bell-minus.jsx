import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/snvrewbju.css';
import '../../css/c/c4ppv22xk.css';
import '../../css/x/xfklkptiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="snvrewbju"/><path class="c4ppv22xk wm-a"/><path class="wm-s xfklkptiz"/></g>`,
		"fallback": "withicons:bell-minus",
	});
}

export default Component;
