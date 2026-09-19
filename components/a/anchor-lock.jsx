import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi5z31vrg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi5z31vrg"/>`,
		"fallback": "fluent-mdl2:anchor-lock",
	});
}

export default Component;
