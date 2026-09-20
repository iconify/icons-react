import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgej7mwsz.css';
import '../../css/y/ysf6s1bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgej7mwsz"/><path class="ysf6s1bcn"/>`,
		"fallback": "si:ai-search-fill",
	});
}

export default Component;
