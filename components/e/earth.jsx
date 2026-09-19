import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/geju8gabu.css';
import '../../css/c/ccdrcabtz.css';
import '../../css/d/dgbqpihnp.css';
import '../../css/r/raqta9bwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="geju8gabu"/><path class="ccdrcabtz"/><path clip-rule="evenodd" class="dgbqpihnp"/><path class="raqta9bwc"/></g>`,
		"fallback": "icon-park-outline:earth",
	});
}

export default Component;
