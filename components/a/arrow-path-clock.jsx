import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqpo4lbmz.css';
import '../../css/m/m9qntro5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uqpo4lbmz"/><path class="m9qntro5r"/></g>`,
		"fallback": "sidekickicons:arrow-path-clock",
	});
}

export default Component;
