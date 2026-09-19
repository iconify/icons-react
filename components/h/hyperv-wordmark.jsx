import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo1vfqqaw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo1vfqqaw"/>`,
		"fallback": "devicon:hyperv-wordmark",
	});
}

export default Component;
