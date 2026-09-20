import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa0jeacgd.css';
import '../../css/m/m9dh1gapn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa0jeacgd"/><path class="m9dh1gapn"/>`,
		"fallback": "streamline-pixel:ecology-organic-sun-growth",
	});
}

export default Component;
