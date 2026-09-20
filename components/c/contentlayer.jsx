import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twg23usft.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" transform="matrix(.5949 0 0 .61208 9.182 1.311)" class="twg23usft"/>`,
		"fallback": "material-icon-theme:contentlayer",
	});
}

export default Component;
