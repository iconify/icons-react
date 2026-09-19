import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9bnb65oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9bnb65oh"/>`,
		"fallback": "fe:align-vertically",
	});
}

export default Component;
