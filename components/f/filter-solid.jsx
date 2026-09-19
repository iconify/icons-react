import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfr-x5gls.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfr-x5gls"/>`,
		"fallback": "fluent-mdl2:filter-solid",
	});
}

export default Component;
