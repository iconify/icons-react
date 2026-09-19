import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud6fnccuj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud6fnccuj"/>`,
		"fallback": "entypo:align-top",
	});
}

export default Component;
