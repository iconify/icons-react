import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6k7g-b_u.css';
import '../../css/p/pr5vy7b3b.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 r6k7g-b_u"/><path class="clr-i-solid clr-i-solid-path-2 pr5vy7b3b"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:hard-disk-solid",
	});
}

export default Component;
