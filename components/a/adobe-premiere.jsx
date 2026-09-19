import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oap-5zu8m.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oap-5zu8m"/>`,
		"fallback": "dinkie-icons:adobe-premiere",
	});
}

export default Component;
