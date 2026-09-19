import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu0h02bll.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 iu0h02bll"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:briefcase-solid",
	});
}

export default Component;
