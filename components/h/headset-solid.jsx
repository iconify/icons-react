import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssf1fofeo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssf1fofeo"/>`,
		"fallback": "fluent-mdl2:headset-solid",
	});
}

export default Component;
