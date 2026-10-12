import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw15abcyx.css';
import '../../css/d/d2sisx8fh.css';
import '../../css/j/jge7z1bbh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw15abcyx"/><path class="d2sisx8fh"/><path class="jge7z1bbh"/>`,
		"fallback": "energy-icons:angle-grinder-48",
	});
}

export default Component;
