import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coyd9vx8k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="coyd9vx8k"/>`,
		"fallback": "streamline:browser-hash-solid",
	});
}

export default Component;
