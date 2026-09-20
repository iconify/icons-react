import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1igf8vwo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1igf8vwo"/>`,
		"fallback": "octicon:info-16",
	});
}

export default Component;
