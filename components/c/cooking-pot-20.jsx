import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f68_4fg2y.css';
import '../../css/m/mnnp_abay.css';
import '../../css/x/xscus6cad.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f68_4fg2y"/><path class="mnnp_abay"/><path class="xscus6cad"/>`,
		"fallback": "energy-icons:cooking-pot-20",
	});
}

export default Component;
