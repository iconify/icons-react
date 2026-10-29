import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm-dbpb1d.css';
import '../../css/j/j9dlgjb4r.css';
import '../../css/e/e-p76g1mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm-dbpb1d wm-shadow"/><path class="j9dlgjb4r wm-k"/><path class="e-p76g1mi wm-k"/>`,
		"fallback": "withicons-pastel:arrow-down",
	});
}

export default Component;
