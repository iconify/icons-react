import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-kvhlhfn.css';
import '../../css/m/m4_7k9qjb.css';
import '../../css/j/jrdm0zbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a-kvhlhfn"/><path class="m4_7k9qjb"/><path class="jrdm0zbnk"/></g>`,
		"fallback": "tdesign:building",
	});
}

export default Component;
