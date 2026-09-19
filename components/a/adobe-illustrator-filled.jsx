import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od80o1xlt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od80o1xlt"/>`,
		"fallback": "dinkie-icons:adobe-illustrator-filled",
	});
}

export default Component;
