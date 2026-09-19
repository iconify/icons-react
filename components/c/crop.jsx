import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_uz53-xm.css';
import '../../css/g/g_a2zwbci.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_uz53-xm"/><path class="g_a2zwbci"/>`,
		"fallback": "ep:crop",
	});
}

export default Component;
