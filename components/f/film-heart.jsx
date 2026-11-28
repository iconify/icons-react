import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4um3lh3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4um3lh3x"/>`,
		"fallback": "noviair:film-heart",
	});
}

export default Component;
