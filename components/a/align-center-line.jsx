import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1zra1bzg.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 g1zra1bzg"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:align-center-line",
	});
}

export default Component;
