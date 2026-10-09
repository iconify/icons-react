import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny1ct12zc.css';
import '../../css/e/e--yctl3q.css';
import '../../css/c/cynz-yk1a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny1ct12zc"/><path class="e--yctl3q"/><path class="cynz-yk1a"/>`,
		"fallback": "energy-icons:double-glazing-20",
	});
}

export default Component;
