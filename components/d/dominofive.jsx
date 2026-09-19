import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo-ux8bhe.css';

const viewBox = {"width":961,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo-ux8bhe"/>`,
		"fallback": "whh:dominofive",
	});
}

export default Component;
