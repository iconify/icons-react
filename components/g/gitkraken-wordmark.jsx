import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asfiwqbnm.css';
import '../../css/l/l1y22fbdo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asfiwqbnm"/><path class="l1y22fbdo"/>`,
		"fallback": "devicon:gitkraken-wordmark",
	});
}

export default Component;
