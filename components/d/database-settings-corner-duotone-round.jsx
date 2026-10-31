import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tm3r-ebrm.css';
import '../../css/r/r4b2qj15v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tm3r-ebrm"/><path class="r4b2qj15v"/></g>`,
		"fallback": "coolicons:database-settings-corner-duotone-round",
	});
}

export default Component;
