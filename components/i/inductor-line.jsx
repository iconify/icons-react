import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijw6wz7gy.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ijw6wz7gy"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:inductor-line",
	});
}

export default Component;
