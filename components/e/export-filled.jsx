import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3_uaza_u.css';
import '../../css/z/zn4yv5btu.css';
import '../../css/t/tdsy3x63e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3_uaza_u"/><path clip-rule="evenodd" class="zn4yv5btu"/><path clip-rule="evenodd" class="tdsy3x63e"/>`,
		"fallback": "bitcoin-icons:export-filled",
	});
}

export default Component;
