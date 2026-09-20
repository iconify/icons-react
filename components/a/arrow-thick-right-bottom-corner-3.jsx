import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sawhoo83s.css';
import '../../css/v/vmmuxw06v.css';
import '../../css/p/p_qa8yb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sawhoo83s"/><path class="vmmuxw06v"/><path class="p_qa8yb6t"/></g>`,
		"fallback": "streamline-ultimate-color:arrow-thick-right-bottom-corner-3",
	});
}

export default Component;
