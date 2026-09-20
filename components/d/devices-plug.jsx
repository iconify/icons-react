import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn6e9-bly.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn6e9-bly"/>`,
		"fallback": "streamline-block:devices-plug",
	});
}

export default Component;
