import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/v/vjzc1ab5s.css';
import '../../css/r/rlz1_xblu.css';
import '../../css/x/xidz7sbfk.css';
import '../../css/c/clzlj-pha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="vjzc1ab5s wm-shadow"/><path class="rlz1_xblu"/><path class="xidz7sbfk"/><path class="clzlj-pha"/></g>`,
		"fallback": "withicons-brutal:circle-stop",
	});
}

export default Component;
