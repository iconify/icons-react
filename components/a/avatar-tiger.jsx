import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jln0xabaj.css';
import '../../css/l/l564diblt.css';
import '../../css/q/qddlig8lw.css';
import '../../css/z/z8ghr5htt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jln0xabaj wm-shadow"/><path class="l564diblt wm-shadow"/><path class="qddlig8lw"/><path class="z8ghr5htt"/></g>`,
		"fallback": "withicons-brutal:avatar-tiger",
	});
}

export default Component;
