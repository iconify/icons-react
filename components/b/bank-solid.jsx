import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikua-wh6z.css';
import '../../css/v/v1s00oj4b.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 ikua-wh6z"/><path class="clr-i-solid clr-i-solid-path-2 v1s00oj4b"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bank-solid",
	});
}

export default Component;
