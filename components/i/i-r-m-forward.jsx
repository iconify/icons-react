import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt4e19b6m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt4e19b6m"/>`,
		"fallback": "fluent-mdl2:i-r-m-forward",
	});
}

export default Component;
