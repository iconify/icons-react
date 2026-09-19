import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ufpp1dblg.css';
import '../../css/o/orq9p0bfg.css';
import '../../css/w/wp7vq6b7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ufpp1dblg"/><path class="orq9p0bfg"/><path class="wp7vq6b7w"/></g>`,
		"fallback": "icon-park-outline:focus-one",
	});
}

export default Component;
