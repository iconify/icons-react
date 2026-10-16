import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re49p_baz.css';
import '../../css/s/sxankrbtm.css';
import '../../css/u/u574l7bmp.css';
import '../../css/a/a8upazg4t.css';
import '../../css/m/msgw5gbys.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re49p_baz"/><path class="sxankrbtm"/><path class="u574l7bmp"/><path class="a8upazg4t"/><path class="msgw5gbys"/>`,
		"fallback": "energy-icons:autonomous-car-48-bold",
	});
}

export default Component;
