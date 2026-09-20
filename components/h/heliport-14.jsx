import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-3d54bzu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-3d54bzu"/>`,
		"fallback": "osmic:heliport-14",
	});
}

export default Component;
