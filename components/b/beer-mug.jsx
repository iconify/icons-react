import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9sd74bbz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9sd74bbz"/>`,
		"fallback": "dinkie-icons:beer-mug",
	});
}

export default Component;
