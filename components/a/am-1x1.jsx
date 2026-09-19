import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-v7pcchz.css';
import '../../css/j/j-g4lup5t.css';
import '../../css/m/m7z06s_0u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-v7pcchz"/><path class="j-g4lup5t"/><path class="m7z06s_0u"/>`,
		"fallback": "flag:am-1x1",
	});
}

export default Component;
