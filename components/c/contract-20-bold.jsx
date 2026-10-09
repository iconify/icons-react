import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx0wpfbrz.css';
import '../../css/y/yc_qcr2ri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx0wpfbrz"/><path class="yc_qcr2ri"/>`,
		"fallback": "energy-icons:contract-20-bold",
	});
}

export default Component;
