import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1ug-9b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1ug-9b1x"/>`,
		"fallback": "simple-icons:bootstrap",
	});
}

export default Component;
