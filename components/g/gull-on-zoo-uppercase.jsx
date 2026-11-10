import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldrvy3bsz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldrvy3bsz"/>`,
		"fallback": "pinhead:gull-on-zoo-uppercase",
	});
}

export default Component;
