import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k9mlrab2e.css';
import '../../css/o/otx7754gq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k9mlrab2e"/><path class="otx7754gq"/></g>`,
		"fallback": "tabler:axe",
	});
}

export default Component;
