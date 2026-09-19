import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjxuw58bz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjxuw58bz"/>`,
		"fallback": "devicon-plain:bazel",
	});
}

export default Component;
