import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-jzfzbvp.css';
import '../../css/r/rxq8jnb4u.css';
import '../../css/n/nkwf0temc.css';
import '../../css/i/irlxlcb2x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q-jzfzbvp"/><path class="rxq8jnb4u"/><path class="nkwf0temc"/><path class="irlxlcb2x"/></g>`,
		"fallback": "streamline-flex-color:deepfake-technology-1",
	});
}

export default Component;
