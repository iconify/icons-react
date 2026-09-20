import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/sl9bb1tup.css';
import '../../css/x/xfxs3opls.css';
import '../../css/r/re_jpdbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="sl9bb1tup"/><path class="xfxs3opls"/><path class="re_jpdbko"/></g>`,
		"fallback": "streamline-sharp-color:help-chat-2",
	});
}

export default Component;
