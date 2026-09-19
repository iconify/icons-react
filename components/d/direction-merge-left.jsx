import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvl9xpv9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvl9xpv9i"/>`,
		"fallback": "carbon:direction-merge-left",
	});
}

export default Component;
