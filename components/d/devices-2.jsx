import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u21hjpu4r.css';
import '../../css/h/hhb7ivskn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u21hjpu4r"/><path class="hhb7ivskn"/></g>`,
		"fallback": "tabler:devices-2",
	});
}

export default Component;
