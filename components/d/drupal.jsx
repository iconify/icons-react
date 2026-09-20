import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fep9-3zrt.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fep9-3zrt"/>`,
		"fallback": "jam:drupal",
	});
}

export default Component;
