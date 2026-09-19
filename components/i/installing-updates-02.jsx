import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u2e6n6bfm.css';
import '../../css/e/eibcigs-u.css';
import '../../css/s/somstlbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u2e6n6bfm"/><path class="eibcigs-u"/><path class="somstlbkg"/></g>`,
		"fallback": "hugeicons:installing-updates-02",
	});
}

export default Component;
