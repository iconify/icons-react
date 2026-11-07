import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iik--rn3y.css';
import '../../css/t/t8sc6ex9y.css';
import '../../css/n/n90j2x48z.css';
import '../../css/t/tnuzmj_om.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iik--rn3y"/><path class="t8sc6ex9y"/><path class="n90j2x48z"/><path class="tnuzmj_om"/>`,
		"fallback": "solar:globe-bold",
	});
}

export default Component;
