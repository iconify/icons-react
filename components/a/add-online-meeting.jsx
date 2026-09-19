import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abrj3cc4d.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abrj3cc4d"/>`,
		"fallback": "fluent-mdl2:add-online-meeting",
	});
}

export default Component;
