import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mw7g6hbqn.css';
import '../../css/i/i5ctgrq3h.css';
import '../../css/e/e6kbp_ktm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mw7g6hbqn"/><path class="i5ctgrq3h"/><circle class="e6kbp_ktm"/></g>`,
		"fallback": "lucide:book-search",
	});
}

export default Component;
