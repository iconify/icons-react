import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiup1veat.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiup1veat"/>`,
		"fallback": "fluent-mdl2:chevron-up-small",
	});
}

export default Component;
