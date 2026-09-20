import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap482lbpr.css';
import '../../css/p/pjk2jl7gn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap482lbpr"/><path class="pjk2jl7gn"/>`,
		"fallback": "streamline-pixel:health-drug-medicine-bag-aid-1",
	});
}

export default Component;
