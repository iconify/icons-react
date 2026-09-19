import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-1d2wutd.css';
import '../../css/a/amc1qtlun.css';
import '../../css/n/nvbta5b-e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m-1d2wutd"/><path class="amc1qtlun"/><path class="nvbta5b-e"/></g>`,
		"fallback": "fluent-emoji-flat:ant",
	});
}

export default Component;
