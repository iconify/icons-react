import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dak927fpw.css';
import '../../css/g/gbl322bwz.css';
import '../../css/p/p8-zntblb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dak927fpw"/><path class="gbl322bwz"/><path class="p8-zntblb"/>`,
		"fallback": "energy-icons:hydrogen-leak-48-bold",
	});
}

export default Component;
