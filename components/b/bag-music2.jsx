import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ywi53wbzk.css';
import '../../css/r/r-g-q0beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ywi53wbzk"/><path class="r-g-q0beh"/></g>`,
		"fallback": "reicon:bag-music2",
	});
}

export default Component;
