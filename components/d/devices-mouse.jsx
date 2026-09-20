import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu51u7m2n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vu51u7m2n"/>`,
		"fallback": "streamline-block:devices-mouse",
	});
}

export default Component;
