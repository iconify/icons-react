import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r3t3dybjj.css';
import '../../css/b/b5n1gackl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="r3t3dybjj"/><path class="b5n1gackl"/></g>`,
		"fallback": "icon-park-outline:hanfu-chinese-style",
	});
}

export default Component;
