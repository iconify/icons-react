import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v63eijmiu.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v63eijmiu"/>`,
		"fallback": "wpf:clapperboard",
	});
}

export default Component;
