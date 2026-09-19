import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf7v85bwx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf7v85bwx"/>`,
		"fallback": "fluent-mdl2:financial",
	});
}

export default Component;
