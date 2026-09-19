import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bnodaob4x.css';
import '../../css/w/wmhdlspux.css';
import '../../css/b/b_nvuk92z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="bnodaob4x"/><path class="wmhdlspux"/><path class="b_nvuk92z"/></g>`,
		"fallback": "icon-park-solid:collection-records",
	});
}

export default Component;
