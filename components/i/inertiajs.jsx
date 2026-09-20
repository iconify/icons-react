import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqgo409cl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqgo409cl"/>`,
		"fallback": "thesvg:inertiajs",
	});
}

export default Component;
