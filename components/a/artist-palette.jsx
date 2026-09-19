import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_f65xs6c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_f65xs6c"/>`,
		"fallback": "dinkie-icons:artist-palette",
	});
}

export default Component;
