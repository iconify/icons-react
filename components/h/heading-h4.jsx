import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f02ft-m9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f02ft-m9g"/>`,
		"fallback": "ci:heading-h4",
	});
}

export default Component;
