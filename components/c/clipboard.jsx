import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyzv7tjym.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kyzv7tjym"/>`,
		"fallback": "ix:clipboard",
	});
}

export default Component;
