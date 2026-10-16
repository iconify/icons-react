import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gylj85but.css';
import '../../css/d/d1rsb2bvs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gylj85but"/><path class="d1rsb2bvs"/>`,
		"fallback": "energy-icons:charger-dual-48-bold",
	});
}

export default Component;
