import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbl-5-buj.css';
import '../../css/v/v101e1bjz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbl-5-buj"/><path class="v101e1bjz"/>`,
		"fallback": "energy-icons:hash-48-bold",
	});
}

export default Component;
