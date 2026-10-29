import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc715-kwz.css';
import '../../css/b/bctv-cbto.css';
import '../../css/h/hustz32ji.css';
import '../../css/a/a55wzqn_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k yc715-kwz"/><path class="bctv-cbto wm-k"/><path class="hustz32ji wm-a"/><path class="a55wzqn_l wm-k"/>`,
		"fallback": "withicons-bauhaus:clipboard",
	});
}

export default Component;
