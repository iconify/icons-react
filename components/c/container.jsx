import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xwr9myepx.css';
import '../../css/r/r1kr6zyty.css';
import '../../css/p/prft9-b7u.css';
import '../../css/w/wubej3afx.css';
import '../../css/a/atw4eq8sv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xwr9myepx"/><path class="r1kr6zyty wm-shadow"/><path class="prft9-b7u"/><path class="wubej3afx"/><path class="atw4eq8sv"/></g>`,
		"fallback": "withicons-brutal:container",
	});
}

export default Component;
