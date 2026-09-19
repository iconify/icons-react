import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am5mhnbrc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am5mhnbrc"/>`,
		"fallback": "dinkie-icons:desktop-computer",
	});
}

export default Component;
