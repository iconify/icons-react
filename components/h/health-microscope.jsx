import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge0zdlm-j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge0zdlm-j"/>`,
		"fallback": "streamline-block:health-microscope",
	});
}

export default Component;
