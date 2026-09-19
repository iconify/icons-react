import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw3qv_-pu.css';
import '../../css/f/fmh8adbaz.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 hw3qv_-pu"/><path class="clr-i-solid clr-i-solid-path-2 fmh8adbaz"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:home-solid",
	});
}

export default Component;
