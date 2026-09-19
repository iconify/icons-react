import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j366e7bfd.css';
import '../../css/n/ndhqwbchl.css';
import '../../css/n/n2fu9lbse.css';
import '../../css/n/n5qmy1psg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j366e7bfd"><path class="ndhqwbchl"/><path class="n2fu9lbse"/><path class="n5qmy1psg"/></g>`,
		"fallback": "fluent-emoji-flat:hot-springs",
	});
}

export default Component;
