import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fepkv5b7w.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fepkv5b7w"/>`,
		"fallback": "fluent-mdl2:design",
	});
}

export default Component;
