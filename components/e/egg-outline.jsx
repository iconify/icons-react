import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpypgjb6f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpypgjb6f"/>`,
		"fallback": "ion:egg-outline",
	});
}

export default Component;
