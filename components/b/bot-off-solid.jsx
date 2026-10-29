import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/agxexkbnv.css';
import '../../css/b/b4736zooy.css';
import '../../css/a/aalr8-b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="agxexkbnv"/><path class="b4736zooy wm-a"/><path class="aalr8-b6s wm-s"/></g>`,
		"fallback": "withicons:bot-off-solid",
	});
}

export default Component;
