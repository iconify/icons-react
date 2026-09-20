import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qc7460ien.css';
import '../../css/m/mf6oketls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="qc7460ien"/><path class="mf6oketls"/></g>`,
		"fallback": "keyline-icons:banknote-minus-sharp-fill",
	});
}

export default Component;
