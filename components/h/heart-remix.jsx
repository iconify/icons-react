import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0sb-hbgu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0sb-hbgu"/>`,
		"fallback": "streamline:heart-remix",
	});
}

export default Component;
