import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g60ojkb5k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g60ojkb5k"/>`,
		"fallback": "maki:aquarium",
	});
}

export default Component;
