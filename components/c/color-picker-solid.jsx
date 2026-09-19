import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-qhpk12u.css';
import '../../css/k/kwhzwub2b.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 m-qhpk12u"/><path class="clr-i-solid clr-i-solid-path-2 kwhzwub2b"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:color-picker-solid",
	});
}

export default Component;
