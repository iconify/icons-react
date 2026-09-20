import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkrwubblf.css';
import '../../css/j/jm1k0nbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wkrwubblf"/><path class="jm1k0nbux"/>`,
		"fallback": "mingcute:android-fill",
	});
}

export default Component;
