import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2wu78b0j.css';
import '../../css/n/nr_by2_hg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2wu78b0j"/><path class="nr_by2_hg"/>`,
		"fallback": "bx:bx-zoom-out",
	});
}

export default Component;
