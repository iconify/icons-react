import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsy-v4bmn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsy-v4bmn"/>`,
		"fallback": "fluent-mdl2:clear-night",
	});
}

export default Component;
