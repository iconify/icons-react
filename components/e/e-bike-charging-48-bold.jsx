import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y36iykq1u.css';
import '../../css/p/psji0nj2g.css';
import '../../css/n/nsy1iobka.css';
import '../../css/s/szn1rdbov.css';
import '../../css/x/x9cdk3d8e.css';
import '../../css/h/h09-poa8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y36iykq1u"/><path class="psji0nj2g"/><path class="nsy1iobka"/><path class="szn1rdbov"/><path class="x9cdk3d8e"/><path class="h09-poa8v"/>`,
		"fallback": "energy-icons:e-bike-charging-48-bold",
	});
}

export default Component;
