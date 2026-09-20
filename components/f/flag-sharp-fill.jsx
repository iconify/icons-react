import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nvj2zu8ep.css';
import '../../css/h/hrmiuob7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="nvj2zu8ep"/><path class="hrmiuob7t"/></g>`,
		"fallback": "keyline-icons:flag-sharp-fill",
	});
}

export default Component;
