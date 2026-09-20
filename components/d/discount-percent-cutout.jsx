import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk68cabhr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk68cabhr"/>`,
		"fallback": "streamline-plump:discount-percent-cutout",
	});
}

export default Component;
