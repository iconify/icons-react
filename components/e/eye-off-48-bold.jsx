import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udbsvx9ze.css';
import '../../css/x/x6a75wd9x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udbsvx9ze"/><path class="x6a75wd9x"/>`,
		"fallback": "energy-icons:eye-off-48-bold",
	});
}

export default Component;
