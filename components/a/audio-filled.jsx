import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yslamubfc.css';
import '../../css/q/q58srweot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yslamubfc"/><path class="q58srweot"/>`,
		"fallback": "tdesign:audio-filled",
	});
}

export default Component;
