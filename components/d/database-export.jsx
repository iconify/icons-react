import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bgbi_bb4g.css';
import '../../css/p/p1_6czbsz.css';
import '../../css/f/f04g5qp3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bgbi_bb4g"/><path class="p1_6czbsz"/><path class="f04g5qp3t"/></g>`,
		"fallback": "tabler:database-export",
	});
}

export default Component;
