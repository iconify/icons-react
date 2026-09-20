import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm8-kxq0z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qm8-kxq0z"/>`,
		"fallback": "streamline-block:basic-arrows-up-right-circle",
	});
}

export default Component;
