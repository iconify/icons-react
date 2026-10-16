import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2o-9ho8x.css';
import '../../css/s/sl_3qvbcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2o-9ho8x"/><path class="sl_3qvbcn"/>`,
		"fallback": "energy-icons:drilling-rig-48-bold",
	});
}

export default Component;
