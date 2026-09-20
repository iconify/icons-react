import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cyjh5hd.css';
import '../../css/n/n65erebyy.css';
import '../../css/t/t7nge0ppf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n_cyjh5hd"><path class="n65erebyy"/><path class="t7nge0ppf"/></g>`,
		"fallback": "si:home-line",
	});
}

export default Component;
