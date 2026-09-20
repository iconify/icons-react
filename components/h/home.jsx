import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2hdh4u_p.css';
import '../../css/p/p7m4fxbob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2hdh4u_p"/><path class="p7m4fxbob"/>`,
		"fallback": "stash:home",
	});
}

export default Component;
