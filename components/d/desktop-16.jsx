import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekuwo8vtc.css';
import '../../css/a/a5pezv9ha.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekuwo8vtc"/><path clip-rule="evenodd" class="a5pezv9ha"/>`,
		"fallback": "qlementine-icons:desktop-16",
	});
}

export default Component;
