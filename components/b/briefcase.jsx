import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/avylcuyds.css';
import '../../css/g/gdiha9p_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="avylcuyds"/><path class="gdiha9p_o"/></g>`,
		"fallback": "feather:briefcase",
	});
}

export default Component;
