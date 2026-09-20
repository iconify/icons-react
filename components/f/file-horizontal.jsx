import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u_-uj42gh.css';
import '../../css/b/bwh2hvf-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u_-uj42gh"/><path class="bwh2hvf-d"/></g>`,
		"fallback": "tabler:file-horizontal",
	});
}

export default Component;
