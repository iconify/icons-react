import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wowg0tbut.css';
import '../../css/k/kqt1ogbeo.css';
import '../../css/h/h0-ybdbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wowg0tbut"/><path class="kqt1ogbeo"/><path class="h0-ybdbxo"/>`,
		"fallback": "streamline-freehand:design-process-mouse-pen",
	});
}

export default Component;
