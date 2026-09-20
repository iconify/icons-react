import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q6wvflb5a.css';
import '../../css/h/hv4hdzbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q6wvflb5a"/><path class="hv4hdzbuu"/></g>`,
		"fallback": "tabler:brand-snapseed",
	});
}

export default Component;
