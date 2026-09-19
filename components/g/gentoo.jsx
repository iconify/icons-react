import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz464fbez.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz464fbez"/>`,
		"fallback": "devicon-plain:gentoo",
	});
}

export default Component;
