import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eu_6qjgvn.css';
import '../../css/b/b8ev_acoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eu_6qjgvn"/><path class="b8ev_acoa"/></g>`,
		"fallback": "lucide:inbox",
	});
}

export default Component;
