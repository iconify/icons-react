import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upe3u69fn.css';
import '../../css/k/kroz22bwe.css';

const viewBox = {"width":927.21,"height":333.87};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upe3u69fn"/><path class="kroz22bwe"/>`,
		"fallback": "thesvg-color:asiana-airlines",
	});
}

export default Component;
