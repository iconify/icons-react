import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1kn8_3bk.css';
import '../../css/k/kbay0kr8o.css';
import '../../css/t/tlh0720xz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1kn8_3bk"/><path class="kbay0kr8o"/><path class="tlh0720xz"/>`,
		"fallback": "openmoji:black-large-circle",
	});
}

export default Component;
