import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzna4a00y.css';

const viewBox = {"width":1063,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzna4a00y"/>`,
		"fallback": "websymbol:heart-empty",
	});
}

export default Component;
