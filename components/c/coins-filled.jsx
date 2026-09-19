import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxbs97bbo.css';
import '../../css/v/v_sj4-bnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxbs97bbo"/><circle class="v_sj4-bnm"/>`,
		"fallback": "bitcoin-icons:coins-filled",
	});
}

export default Component;
