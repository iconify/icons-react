import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf7inyggn.css';
import '../../css/j/jkq7-hbwz.css';
import '../../css/b/bl09rcbev.css';
import '../../css/p/ph-mjcb4f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf7inyggn"/><path class="jkq7-hbwz"/><path class="bl09rcbev"/><path class="ph-mjcb4f"/>`,
		"fallback": "openmoji:bavaria-flag",
	});
}

export default Component;
