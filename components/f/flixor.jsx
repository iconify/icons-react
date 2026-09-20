import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr-9cveng.css';
import '../../css/d/dvatmlb6v.css';
import '../../css/u/udeylcb8n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGpkCMtczw" x1="-50.529" x2="-43.214" y1="646.75" y2="646.75" gradientTransform="matrix(70 0 0 -60 3537 39061)" gradientUnits="userSpaceOnUse"><stop offset="0" class="hr-9cveng"/><stop offset="1" class="dvatmlb6v"/></linearGradient><path fill="url(#SVGpkCMtczw)" class="udeylcb8n"/>`,
		"fallback": "selfhst:flixor",
	});
}

export default Component;
