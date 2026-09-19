import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aqezq3b2u.css';
import '../../css/s/szxfm0qew.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="aqezq3b2u"/><path clip-rule="evenodd" class="szxfm0qew"/></g>`,
		"fallback": "icon-park-outline:circle-three",
	});
}

export default Component;
