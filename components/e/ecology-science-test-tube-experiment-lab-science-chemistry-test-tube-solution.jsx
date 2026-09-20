import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu3wysshd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu3wysshd"/>`,
		"fallback": "streamline:ecology-science-test-tube-experiment-lab-science-chemistry-test-tube-solution",
	});
}

export default Component;
