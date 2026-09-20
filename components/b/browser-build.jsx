import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqas8j_5g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqas8j_5g"/>`,
		"fallback": "streamline:browser-build",
	});
}

export default Component;
