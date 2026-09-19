import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osmjjhb0x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osmjjhb0x"/>`,
		"fallback": "devicon-plain:drupal-wordmark",
	});
}

export default Component;
