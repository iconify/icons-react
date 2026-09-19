import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0mr6uruh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0mr6uruh"/>`,
		"fallback": "devicon-plain:homebrew",
	});
}

export default Component;
