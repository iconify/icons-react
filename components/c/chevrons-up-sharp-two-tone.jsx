import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p61phbjmj.css';
import '../../css/o/ouotnccue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="p61phbjmj"/><path class="ouotnccue"/></g>`,
		"fallback": "keyline-icons:chevrons-up-sharp-two-tone",
	});
}

export default Component;
