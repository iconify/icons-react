import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_76tkbet.css';
import '../../css/e/ehk4h4wnf.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 u_76tkbet"/><path class="clr-i-outline clr-i-outline-path-2 ehk4h4wnf"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:inbox-line",
	});
}

export default Component;
