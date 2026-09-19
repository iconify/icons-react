import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snmht1bhm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snmht1bhm"/>`,
		"fallback": "fluent-mdl2:alert-solid",
	});
}

export default Component;
