import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w649blafw.css';
import '../../css/x/x5ch8acbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w649blafw"/><path class="x5ch8acbk"/></g>`,
		"fallback": "keyline-icons:hand-pointer-left-two-tone",
	});
}

export default Component;
