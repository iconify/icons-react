import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn0q0ub8q.css';
import '../../css/d/dfdq8t3qq.css';
import '../../css/g/g4y8tubxn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn0q0ub8q"/><path class="dfdq8t3qq"/><path class="g4y8tubxn"/>`,
		"fallback": "selfhst:gryt-light",
	});
}

export default Component;
