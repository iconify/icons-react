import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhxi-trnl.css';
import '../../css/p/px5xiwqdn.css';
import '../../css/i/ie9ox3b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="jhxi-trnl"/><circle class="px5xiwqdn"/><path class="ie9ox3b3a"/></g>`,
		"fallback": "meteor-icons:image",
	});
}

export default Component;
