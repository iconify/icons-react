import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pkjaxubeg.css';
import '../../css/o/osa7a8wgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pkjaxubeg"/><path class="osa7a8wgu"/></g>`,
		"fallback": "streamline-sharp:inbox-favorite",
	});
}

export default Component;
