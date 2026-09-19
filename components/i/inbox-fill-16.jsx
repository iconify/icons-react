import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe_qtl4kr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe_qtl4kr"/>`,
		"fallback": "garden:inbox-fill-16",
	});
}

export default Component;
