import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usss4-bhs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usss4-bhs"/>`,
		"fallback": "fa7-solid:flag-checkered",
	});
}

export default Component;
