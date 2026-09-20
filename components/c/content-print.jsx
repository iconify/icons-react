import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwf0k67yb.css';
import '../../css/o/o94p-i96p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwf0k67yb"/><path class="o94p-i96p"/>`,
		"fallback": "streamline-block:content-print",
	});
}

export default Component;
