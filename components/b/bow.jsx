import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab3umv__j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab3umv__j"/>`,
		"fallback": "streamline:bow",
	});
}

export default Component;
