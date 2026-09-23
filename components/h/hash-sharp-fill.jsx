import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsjxj3b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsjxj3b2o"/>`,
		"fallback": "keyline-icons:hash-sharp-fill",
	});
}

export default Component;
