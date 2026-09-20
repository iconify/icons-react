import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re-aofbfv.css';
import '../../css/y/yqhnyw4ee.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/f3wy_xbpf.css';
import '../../css/q/q4_1xjnit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re-aofbfv"/><path class="yqhnyw4ee"/><g class="xtpeb-edw"><path class="f3wy_xbpf"/><path class="q4_1xjnit"/></g>`,
		"fallback": "stash:image-open-duotone",
	});
}

export default Component;
