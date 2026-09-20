import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueg7wcbbp.css';
import '../../css/c/coghm8bmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueg7wcbbp"/><path clip-rule="evenodd" class="coghm8bmd"/>`,
		"fallback": "qlementine-icons:instagram-fill-24",
	});
}

export default Component;
