import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2xsqtgqd.css';
import '../../css/p/pdd2_pbvf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2xsqtgqd"/><path class="pdd2_pbvf"/>`,
		"fallback": "garden:download-fill-12",
	});
}

export default Component;
