import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tvudebc2k.css';
import '../../css/l/lzj92chim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="tvudebc2k"/><path class="lzj92chim"/></g>`,
		"fallback": "keyline-icons:git-return-sharp-duotone",
	});
}

export default Component;
