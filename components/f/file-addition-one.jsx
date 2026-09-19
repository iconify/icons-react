import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jpn9oygip.css';
import '../../css/n/nzzcombqn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="jpn9oygip"/><path class="nzzcombqn"/></g>`,
		"fallback": "icon-park-outline:file-addition-one",
	});
}

export default Component;
