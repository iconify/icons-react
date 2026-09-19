import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohxk8dnoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohxk8dnoz"/>`,
		"fallback": "griddy-icons:drupal",
	});
}

export default Component;
