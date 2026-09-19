import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-z7z2qao.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-z7z2qao"/>`,
		"fallback": "zmdi:camera-mic",
	});
}

export default Component;
