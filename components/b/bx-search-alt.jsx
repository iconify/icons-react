import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr_by2_hg.css';
import '../../css/s/stthulblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr_by2_hg"/><path class="stthulblw"/>`,
		"fallback": "bx:bx-search-alt",
	});
}

export default Component;
