import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1k18lfcc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1k18lfcc"/>`,
		"fallback": "octicon:ai-model-16",
	});
}

export default Component;
