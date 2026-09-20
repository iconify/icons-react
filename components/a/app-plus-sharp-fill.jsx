import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s3gesbwpu.css';
import '../../css/k/kj2waq_ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="s3gesbwpu"/><path class="kj2waq_ni"/></g>`,
		"fallback": "keyline-icons:app-plus-sharp-fill",
	});
}

export default Component;
