import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rodc2fbdg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rodc2fbdg"/>`,
		"fallback": "devicon-plain:aspire",
	});
}

export default Component;
