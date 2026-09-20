import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3bvu71xf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g3bvu71xf"/>`,
		"fallback": "nonicons:capacitor-16",
	});
}

export default Component;
