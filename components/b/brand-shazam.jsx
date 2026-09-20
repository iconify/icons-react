import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rbgykkbbq.css';
import '../../css/v/vayfs6bfv.css';
import '../../css/j/j7qjn6psg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rbgykkbbq"/><path class="vayfs6bfv"/><path class="j7qjn6psg"/></g>`,
		"fallback": "tabler:brand-shazam",
	});
}

export default Component;
