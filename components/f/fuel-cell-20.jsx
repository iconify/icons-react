import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4ztp3ont.css';
import '../../css/w/w093ptm_d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4ztp3ont"/><path class="w093ptm_d"/>`,
		"fallback": "energy-icons:fuel-cell-20",
	});
}

export default Component;
