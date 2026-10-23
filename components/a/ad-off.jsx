import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1obo4lqw.css';
import '../../css/s/slrc8sbeo.css';
import '../../css/o/ol3o9dvhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a1obo4lqw"/><rect class="slrc8sbeo"/><path class="ol3o9dvhf"/></g>`,
		"fallback": "andrsrxn:ad-off",
	});
}

export default Component;
