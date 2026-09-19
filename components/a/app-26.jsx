import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1zm2n9fx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1zm2n9fx"/>`,
		"fallback": "garden:app-26",
	});
}

export default Component;
