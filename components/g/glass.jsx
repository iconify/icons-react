import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p03oabbgq.css';
import '../../css/u/u9xh5os5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p03oabbgq"/><path class="u9xh5os5w"/></g>`,
		"fallback": "tabler:glass",
	});
}

export default Component;
