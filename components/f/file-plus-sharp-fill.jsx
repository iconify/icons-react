import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/adfmt_bia.css';
import '../../css/i/icjkmubxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="adfmt_bia"/><path class="icjkmubxz"/></g>`,
		"fallback": "keyline-icons:file-plus-sharp-fill",
	});
}

export default Component;
