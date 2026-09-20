import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uynwflb5l.css';
import '../../css/f/f-ypa7iae.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uynwflb5l"/><path clip-rule="evenodd" class="f-ypa7iae"/>`,
		"fallback": "lineicons:colour-palette-3",
	});
}

export default Component;
