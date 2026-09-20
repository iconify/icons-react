import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/li_ohhb9c.css';
import '../../css/s/smrvksb-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="li_ohhb9c"/><path class="smrvksb-z"/></g>`,
		"fallback": "tabler:arrow-merge-alt-left",
	});
}

export default Component;
