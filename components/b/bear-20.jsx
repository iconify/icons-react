import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suuvhacgc.css';
import '../../css/c/codq7jbgp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suuvhacgc"/><path class="codq7jbgp"/>`,
		"fallback": "energy-icons:bear-20",
	});
}

export default Component;
