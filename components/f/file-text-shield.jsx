import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qhfmzzbsa.css';
import '../../css/n/no97jjb_s.css';
import '../../css/q/qzcpcybrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qhfmzzbsa"/><path class="no97jjb_s"/><path class="qzcpcybrz"/></g>`,
		"fallback": "tabler:file-text-shield",
	});
}

export default Component;
