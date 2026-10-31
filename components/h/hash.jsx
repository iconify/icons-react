import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/odzqh-bcc.css';
import '../../css/z/zkigybchi.css';
import '../../css/r/r6wnw272x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="odzqh-bcc wm-k"/><path class="wm-a zkigybchi"/><path class="r6wnw272x wm-deco"/></g>`,
		"fallback": "withicons-kawaii:hash",
	});
}

export default Component;
