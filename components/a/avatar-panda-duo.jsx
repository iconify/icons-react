import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f7raeib7y.css';
import '../../css/s/sj5mcbcda.css';
import '../../css/m/m9ajg07ni.css';
import '../../css/i/iz4y5kbsg.css';
import '../../css/s/ssdqucc2z.css';
import '../../css/m/mdvkx-geo.css';
import '../../css/x/xarb4rskp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f7raeib7y"/><path class="sj5mcbcda"/><path class="m9ajg07ni"/><path class="iz4y5kbsg"/><path class="ssdqucc2z wm-a"/><path class="mdvkx-geo"/><path class="xarb4rskp"/></g>`,
		"fallback": "withicons:avatar-panda-duo",
	});
}

export default Component;
