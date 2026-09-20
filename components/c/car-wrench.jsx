import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoo82bpzy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoo82bpzy"/>`,
		"fallback": "roentgen:car-wrench",
	});
}

export default Component;
