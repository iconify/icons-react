import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m0lddebws.css';
import '../../css/t/tox0_487f.css';
import '../../css/w/w-urnk1wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m0lddebws"/><path clip-rule="evenodd" class="tox0_487f"/><path class="w-urnk1wg"/></g>`,
		"fallback": "hugeicons:flower-01",
	});
}

export default Component;
