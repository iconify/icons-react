import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2-1xumco.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2-1xumco"/>`,
		"fallback": "fluent-mdl2:drill-show",
	});
}

export default Component;
