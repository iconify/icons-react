import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bchgvkbbo.css';
import '../../css/c/cy37qpj-w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bchgvkbbo"/><path class="cy37qpj-w"/>`,
		"fallback": "streamline-pixel:hand-fight-2-finger",
	});
}

export default Component;
