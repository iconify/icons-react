import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr2ks5bvo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr2ks5bvo"/>`,
		"fallback": "garden:broom-fill-20",
	});
}

export default Component;
