import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rvn-4abms.css';
import '../../css/t/two94jq7j.css';
import '../../css/a/aip3-nbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rvn-4abms"/><path class="two94jq7j"/><path class="aip3-nbts"/></g>`,
		"fallback": "thesvg:doubao",
	});
}

export default Component;
