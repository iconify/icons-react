import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wphs3ib7r.css';
import '../../css/m/mtrf6ow5i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wphs3ib7r"/><path class="mtrf6ow5i"/></g>`,
		"fallback": "bi:box-arrow-in-down",
	});
}

export default Component;
