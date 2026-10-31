import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pon1g0i6n.css';
import '../../css/x/x9h5h7sdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pon1g0i6n"/><path class="x9h5h7sdw"/></g>`,
		"fallback": "coolicons:clipboard-duocolor-round",
	});
}

export default Component;
