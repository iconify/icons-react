import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqdbx8b5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqdbx8b5y"/>`,
		"fallback": "thesvg:activeloop",
	});
}

export default Component;
