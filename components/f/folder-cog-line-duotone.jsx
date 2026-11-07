import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wojb86weh.css';
import '../../css/d/d-zbqkbwm.css';
import '../../css/r/rsaf-pbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wojb86weh"/><path class="d-zbqkbwm"/><circle class="rsaf-pbca"/></g>`,
		"fallback": "solar:folder-cog-line-duotone",
	});
}

export default Component;
