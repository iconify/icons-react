import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbnu52b5d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbnu52b5d"/>`,
		"fallback": "fa7-solid:helicopter-symbol",
	});
}

export default Component;
