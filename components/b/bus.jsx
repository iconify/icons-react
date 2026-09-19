import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aop2s9bzy.css';

const viewBox = {"width":666,"height":746};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aop2s9bzy"/>`,
		"fallback": "ls:bus",
	});
}

export default Component;
