import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jif-fcboa.css';
import '../../css/l/l2t9bkdqd.css';
import '../../css/h/hd1iybcfi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="jif-fcboa"/><path clip-rule="evenodd" class="l2t9bkdqd"/><path class="hd1iybcfi"/></g>`,
		"fallback": "icon-park-outline:file-pdf",
	});
}

export default Component;
