import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/ggr3gll0q.css';
import '../../css/h/h6pfvubgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ggr3gll0q"/><path class="h6pfvubgz"/></g>`,
		"fallback": "hugeicons:card-sim",
	});
}

export default Component;
