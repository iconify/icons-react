import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bgbi_bb4g.css';
import '../../css/k/kb72m6b8r.css';
import '../../css/v/vbhsh_blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bgbi_bb4g"/><path class="kb72m6b8r"/><path class="vbhsh_blj"/></g>`,
		"fallback": "tabler:database-search",
	});
}

export default Component;
