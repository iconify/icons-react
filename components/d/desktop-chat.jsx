import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m0ji5jb5t.css';
import '../../css/x/xwo0e49hg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m0ji5jb5t"/><path class="xwo0e49hg"/></g>`,
		"fallback": "streamline-sharp:desktop-chat",
	});
}

export default Component;
