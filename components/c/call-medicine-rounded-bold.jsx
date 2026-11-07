import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kflf7crkg.css';
import '../../css/a/aam5d_bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kflf7crkg"/><path clip-rule="evenodd" class="aam5d_bgq"/>`,
		"fallback": "solar:call-medicine-rounded-bold",
	});
}

export default Component;
