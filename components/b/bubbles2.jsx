import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q29bvxb5v.css';

const viewBox = {"width":18,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q29bvxb5v"/>`,
		"fallback": "icomoon-free:bubbles2",
	});
}

export default Component;
