import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr4cytbub.css';

const viewBox = {"width":2048,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr4cytbub"/>`,
		"fallback": "fa:car",
	});
}

export default Component;
