import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp_nfnigp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp_nfnigp"/>`,
		"fallback": "mingcute:ease-in-control-point-fill",
	});
}

export default Component;
