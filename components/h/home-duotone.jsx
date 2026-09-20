import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2hdh4u_p.css';
import '../../css/u/uoq1u0bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2hdh4u_p"/><path class="uoq1u0bje"/>`,
		"fallback": "stash:home-duotone",
	});
}

export default Component;
