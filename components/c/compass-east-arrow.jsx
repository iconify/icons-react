import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewgx1ek3d.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewgx1ek3d"/>`,
		"fallback": "memory:compass-east-arrow",
	});
}

export default Component;
