import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q9s_e6opx.css';
import '../../css/c/cujz86rwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q9s_e6opx"/><path class="cujz86rwb"/></g>`,
		"fallback": "tabler:devices-spark",
	});
}

export default Component;
