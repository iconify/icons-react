import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzsd2gbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzsd2gbys"/>`,
		"fallback": "simple-icons:coda",
	});
}

export default Component;
