import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7kb9t1gf.css';
import '../../css/f/fj-2afnlk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7kb9t1gf"/><path class="fj-2afnlk"/>`,
		"fallback": "energy-icons:corner-down-left-48-bold",
	});
}

export default Component;
