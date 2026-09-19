import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twl51hcqw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twl51hcqw"/>`,
		"fallback": "fluent-mdl2:button-control",
	});
}

export default Component;
