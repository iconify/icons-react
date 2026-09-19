import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iavtan26b.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iavtan26b"/>`,
		"fallback": "fluent-mdl2:align-vertical-center",
	});
}

export default Component;
