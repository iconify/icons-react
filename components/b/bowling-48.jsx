import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut-z-5uyn.css';
import '../../css/f/fh5ya8rmw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut-z-5uyn"/><path class="fh5ya8rmw"/>`,
		"fallback": "energy-icons:bowling-48",
	});
}

export default Component;
