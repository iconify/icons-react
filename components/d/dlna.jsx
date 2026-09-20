import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akni7yb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akni7yb_f"/>`,
		"fallback": "thesvg-color:dlna",
	});
}

export default Component;
