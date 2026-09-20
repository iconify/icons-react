import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywys17btk.css';
import '../../css/j/j4njxhbrr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywys17btk"/><path class="j4njxhbrr"/>`,
		"fallback": "selfhst:gdms-dark",
	});
}

export default Component;
