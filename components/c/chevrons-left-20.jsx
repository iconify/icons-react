import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_7y3qb_r.css';
import '../../css/h/hrdk82bep.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_7y3qb_r"/><path class="hrdk82bep"/>`,
		"fallback": "energy-icons:chevrons-left-20",
	});
}

export default Component;
