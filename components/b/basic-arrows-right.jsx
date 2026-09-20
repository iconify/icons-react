import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njnmu2p-d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njnmu2p-d"/>`,
		"fallback": "streamline-block:basic-arrows-right",
	});
}

export default Component;
