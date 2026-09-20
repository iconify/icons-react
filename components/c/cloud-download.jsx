import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2xcm6bdm.css';
import '../../css/q/qp-ml_bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2xcm6bdm"/><path class="qp-ml_bge"/>`,
		"fallback": "lineicons:cloud-download",
	});
}

export default Component;
