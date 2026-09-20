import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9ns15bcg.css';
import '../../css/l/lgj5z1bgn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9ns15bcg"/><path class="lgj5z1bgn"/>`,
		"fallback": "streamline-pixel:business-products-money",
	});
}

export default Component;
