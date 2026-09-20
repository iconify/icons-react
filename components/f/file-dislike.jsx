import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b0zd-yb1a.css';
import '../../css/r/rz6a6db_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b0zd-yb1a"/><path class="rz6a6db_c"/></g>`,
		"fallback": "tabler:file-dislike",
	});
}

export default Component;
