import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rystv1tqu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rystv1tqu"/>`,
		"fallback": "dashicons:feedback",
	});
}

export default Component;
