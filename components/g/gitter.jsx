import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv22t_oag.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv22t_oag"/>`,
		"fallback": "la:gitter",
	});
}

export default Component;
