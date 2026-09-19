import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_78o9bzj.css';
import '../../css/r/rf89yab9s.css';
import '../../css/j/jzyc6ac6r.css';
import '../../css/w/wqfwsubtj.css';
import '../../css/o/o163b2bww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v_78o9bzj"/><path class="rf89yab9s"/><path clip-rule="evenodd" class="jzyc6ac6r"/><path class="wqfwsubtj"/><path clip-rule="evenodd" class="o163b2bww"/></g>`,
		"fallback": "healthicons:human-resoruces-outline",
	});
}

export default Component;
