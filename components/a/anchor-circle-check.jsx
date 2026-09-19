import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_td2nbcq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_td2nbcq"/>`,
		"fallback": "fa7-solid:anchor-circle-check",
	});
}

export default Component;
