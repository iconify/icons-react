import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7s6tsbkb.css';
import '../../css/d/d7vyowb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7s6tsbkb"/><path class="d7vyowb-e"/>`,
		"fallback": "eva:close-square-outline",
	});
}

export default Component;
