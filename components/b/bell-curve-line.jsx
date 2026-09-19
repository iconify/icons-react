import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehtknl-of.css';
import '../../css/k/kxd8gsbwd.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ehtknl-of"/><path class="clr-i-outline clr-i-outline-path-2 kxd8gsbwd"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bell-curve-line",
	});
}

export default Component;
