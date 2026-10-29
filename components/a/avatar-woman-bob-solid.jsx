import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wghjxmi0d.css';
import '../../css/m/m64uyf54p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wghjxmi0d"/><path class="m64uyf54p wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-bob-solid",
	});
}

export default Component;
