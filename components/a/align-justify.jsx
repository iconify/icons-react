import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koo-gmb4d.css';
import '../../css/h/h1-_tjb6i.css';
import '../../css/r/r68kisbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="koo-gmb4d wm-shadow"/><path class="h1-_tjb6i wm-k"/><path class="r68kisbcu wm-k"/>`,
		"fallback": "withicons-pastel:align-justify",
	});
}

export default Component;
