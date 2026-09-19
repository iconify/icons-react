import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi8ylqbbb.css';

const viewBox = {"width":512,"height":502};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi8ylqbbb"/>`,
		"fallback": "file-icons:3ds-max",
	});
}

export default Component;
