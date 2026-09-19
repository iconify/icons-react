import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o62692bpo.css';

const viewBox = {"width":760,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o62692bpo"/>`,
		"fallback": "websymbol:doc",
	});
}

export default Component;
