import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_zrozxsx.css';
import '../../css/k/k5fmwhakm.css';
import '../../css/p/pq3xuilmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_zrozxsx"/><path clip-rule="evenodd" class="k5fmwhakm"/><path clip-rule="evenodd" class="pq3xuilmm"/>`,
		"fallback": "solar:card-transfer-bold",
	});
}

export default Component;
