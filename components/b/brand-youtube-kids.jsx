import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sz1r4lbym.css';
import '../../css/g/gn3t4qb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sz1r4lbym"/><path class="gn3t4qb6g"/></g>`,
		"fallback": "tabler:brand-youtube-kids",
	});
}

export default Component;
