import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpv44_q-l.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpv44_q-l"/>`,
		"fallback": "fluent-mdl2:eat-drink",
	});
}

export default Component;
