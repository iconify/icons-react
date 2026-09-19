import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0551ib7x.css';
import '../../css/j/jnf1tabyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0551ib7x"/><path class="jnf1tabyp"/>`,
		"fallback": "famicons:crop-sharp",
	});
}

export default Component;
