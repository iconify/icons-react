import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6pslhx0v.css';
import '../../css/g/gboct0b5i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6pslhx0v"/><path clip-rule="evenodd" class="gboct0b5i"/>`,
		"fallback": "devicon:atom-wordmark",
	});
}

export default Component;
