import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6x2luhbf.css';
import '../../css/d/dnqhx8bqg.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6x2luhbf"/><path class="dnqhx8bqg"/>`,
		"fallback": "iwwa:add-1m",
	});
}

export default Component;
