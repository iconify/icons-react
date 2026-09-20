import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mp86jiafm.css';
import '../../css/k/kzywstbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mp86jiafm"/><path class="kzywstbpj"/></g>`,
		"fallback": "keyline-icons:contacts-sharp-two-tone",
	});
}

export default Component;
