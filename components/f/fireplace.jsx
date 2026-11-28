import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bihnzzemi.css';
import '../../css/j/j-idgnb2v.css';
import '../../css/p/pon0x47tn.css';
import '../../css/u/uuu65qbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bihnzzemi"/><path class="j-idgnb2v"/><path class="pon0x47tn"/><path class="uuu65qbav"/></g>`,
		"fallback": "iconaut:fireplace",
	});
}

export default Component;
