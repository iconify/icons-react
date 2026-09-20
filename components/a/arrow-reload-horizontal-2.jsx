import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fzxvnhbpt.css';
import '../../css/p/pkmd6bcjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fzxvnhbpt"/><path class="pkmd6bcjv"/></g>`,
		"fallback": "streamline-sharp:arrow-reload-horizontal-2",
	});
}

export default Component;
