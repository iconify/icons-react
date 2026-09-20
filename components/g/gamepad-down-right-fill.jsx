import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvti2vw8w.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvti2vw8w"/>`,
		"fallback": "memory:gamepad-down-right-fill",
	});
}

export default Component;
