import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s212d_bjy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s212d_bjy"/>`,
		"fallback": "fluent-mdl2:browser-screen-shot",
	});
}

export default Component;
