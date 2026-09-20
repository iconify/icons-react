import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r-ebu3gcb.css';
import '../../css/l/lp9te75in.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r-ebu3gcb"/><path class="lp9te75in"/></g>`,
		"fallback": "tabler:brand-zulip",
	});
}

export default Component;
