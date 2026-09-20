import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv-z9s63g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv-z9s63g"/>`,
		"fallback": "streamline-color:brightness-3",
	});
}

export default Component;
