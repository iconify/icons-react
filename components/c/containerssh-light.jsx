import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw2k4fb0y.css';
import '../../css/d/d5-tlybrh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw2k4fb0y"/><path class="d5-tlybrh"/>`,
		"fallback": "selfhst:containerssh-light",
	});
}

export default Component;
