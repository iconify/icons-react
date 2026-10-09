import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou-cxiblp.css';
import '../../css/j/jheawubao.css';
import '../../css/h/h1a11qb_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou-cxiblp"/><path class="jheawubao"/><path class="h1a11qb_c"/>`,
		"fallback": "energy-icons:gas-valve-48",
	});
}

export default Component;
