import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue03v71pc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue03v71pc"/>`,
		"fallback": "streamline:expand-horizontal-1",
	});
}

export default Component;
