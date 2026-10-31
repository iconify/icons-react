import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ersgu1bwz.css';
import '../../css/w/w3s_6mxba.css';
import '../../css/n/ndyi4ob1u.css';
import '../../css/d/dhnlotbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ersgu1bwz wm-shadow"/><path class="w3s_6mxba wm-shadow"/><path class="ndyi4ob1u"/><path class="dhnlotbzb"/></g>`,
		"fallback": "withicons-brutal:coffin",
	});
}

export default Component;
