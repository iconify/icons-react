import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udpk4tbla.css';
import '../../css/p/pob1i1ksy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udpk4tbla"/><path clip-rule="evenodd" class="pob1i1ksy"/>`,
		"fallback": "solar:gamepad-charge-bold",
	});
}

export default Component;
