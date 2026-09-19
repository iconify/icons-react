import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/makyqeb8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="makyqeb8z"/>`,
		"fallback": "fa6-brands:css3",
	});
}

export default Component;
