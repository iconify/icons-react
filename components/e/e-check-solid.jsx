import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydnkg5bxq.css';
import '../../css/a/abzcb78fh.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 ydnkg5bxq"/><path class="abzcb78fh clr-i-solid clr-i-solid-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:e-check-solid",
	});
}

export default Component;
