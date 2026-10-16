import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjljwei0o.css';
import '../../css/g/ghw7-wbwc.css';
import '../../css/b/b_vy63bbo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjljwei0o"/><path class="ghw7-wbwc"/><path class="b_vy63bbo"/>`,
		"fallback": "energy-icons:brick-wall-20-bold",
	});
}

export default Component;
