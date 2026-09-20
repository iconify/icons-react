import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppwbzubrs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppwbzubrs"/>`,
		"fallback": "material-icon-theme:cadence",
	});
}

export default Component;
