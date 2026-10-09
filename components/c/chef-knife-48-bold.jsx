import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfmy84bkp.css';
import '../../css/r/rgmiyo8xl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfmy84bkp"/><path class="rgmiyo8xl"/>`,
		"fallback": "energy-icons:chef-knife-48-bold",
	});
}

export default Component;
