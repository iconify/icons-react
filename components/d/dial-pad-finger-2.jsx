import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4q9gfbuc.css';
import '../../css/u/udykl8bri.css';
import '../../css/c/c1-tbyb0s.css';
import '../../css/b/bi92o_bby.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v4q9gfbuc"/><path class="udykl8bri"/><path class="c1-tbyb0s"/><path class="bi92o_bby"/></g>`,
		"fallback": "streamline-flex-color:dial-pad-finger-2",
	});
}

export default Component;
