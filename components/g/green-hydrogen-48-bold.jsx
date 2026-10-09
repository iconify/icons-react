import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_ra3nchf.css';
import '../../css/e/esw8pgb2a.css';
import '../../css/l/ld5dtibtw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_ra3nchf"/><path class="esw8pgb2a"/><path class="ld5dtibtw"/>`,
		"fallback": "energy-icons:green-hydrogen-48-bold",
	});
}

export default Component;
