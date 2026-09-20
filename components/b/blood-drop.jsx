import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zols1xbmc.css';
import '../../css/o/oweeyyila.css';
import '../../css/f/fi11yacax.css';
import '../../css/q/q5u_d7bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zols1xbmc"/><path class="oweeyyila"/><path class="fi11yacax"/><path class="q5u_d7bfd"/></g>`,
		"fallback": "streamline-ultimate-color:blood-drop",
	});
}

export default Component;
