import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4gnvtuxg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4gnvtuxg"/>`,
		"fallback": "dashicons:controls-volumeoff",
	});
}

export default Component;
