import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/frhosgbmg.css';
import '../../css/m/mgu37yb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="frhosgbmg"/><path class="mgu37yb1a"/></g>`,
		"fallback": "lucide:briefcase-plus",
	});
}

export default Component;
