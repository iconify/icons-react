import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_pz3rxhk.css';
import '../../css/i/iha0k5bup.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_pz3rxhk"/><path class="iha0k5bup"/>`,
		"fallback": "energy-icons:esg-report-48-bold",
	});
}

export default Component;
