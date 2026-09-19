import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb1mrmbdd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb1mrmbdd"/>`,
		"fallback": "dinkie-icons:adobe-in-design",
	});
}

export default Component;
