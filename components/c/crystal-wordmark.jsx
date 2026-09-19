import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo_f7bvn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmo_f7bvn"/>`,
		"fallback": "devicon:crystal-wordmark",
	});
}

export default Component;
