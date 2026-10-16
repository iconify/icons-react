import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc3ilob8v.css';
import '../../css/o/ocwmt_j3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc3ilob8v"/><path class="ocwmt_j3i"/>`,
		"fallback": "energy-icons:box-cutter-48",
	});
}

export default Component;
