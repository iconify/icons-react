import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlb-er9ml.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlb-er9ml"/>`,
		"fallback": "dinkie-icons:drop-of-blood",
	});
}

export default Component;
