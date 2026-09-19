import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sol3rjohs.css';
import '../../css/e/emikm_bht.css';
import '../../css/d/d5_mhobqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="sol3rjohs"/><path class="emikm_bht"/><path class="d5_mhobqp"/></g>`,
		"fallback": "iconamoon:frowning-face",
	});
}

export default Component;
