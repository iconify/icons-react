import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz8m0tb2p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz8m0tb2p"/>`,
		"fallback": "streamline-color:anchor",
	});
}

export default Component;
