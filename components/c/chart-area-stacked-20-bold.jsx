import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w01dflzvf.css';
import '../../css/b/b6wxp1uvp.css';
import '../../css/u/u5jabkb_n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w01dflzvf"/><path class="b6wxp1uvp"/><path class="u5jabkb_n"/>`,
		"fallback": "energy-icons:chart-area-stacked-20-bold",
	});
}

export default Component;
