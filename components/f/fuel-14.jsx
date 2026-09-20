import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2wv2hb6l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2wv2hb6l"/>`,
		"fallback": "osmic:fuel-14",
	});
}

export default Component;
