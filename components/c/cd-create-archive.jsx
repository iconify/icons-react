import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr79zmb6s.css';
import '../../css/j/jdsu42b0b.css';
import '../../css/n/n412juyes.css';
import '../../css/v/vk54hubeq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr79zmb6s"/><circle class="jdsu42b0b"/><path class="n412juyes"/><path class="vk54hubeq"/>`,
		"fallback": "carbon:cd-create-archive",
	});
}

export default Component;
