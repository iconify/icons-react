import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy1p9rb5d.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 yy1p9rb5d"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:half-star-solid",
	});
}

export default Component;
