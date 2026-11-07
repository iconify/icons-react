import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg6z1ub6a.css';
import '../../css/q/qtozvfikf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg6z1ub6a"/><path clip-rule="evenodd" class="qtozvfikf"/>`,
		"fallback": "solar:cloud-plus-bold-duotone",
	});
}

export default Component;
