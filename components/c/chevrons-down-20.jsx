import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deisahb9j.css';
import '../../css/b/bfngflyuv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deisahb9j"/><path class="bfngflyuv"/>`,
		"fallback": "energy-icons:chevrons-down-20",
	});
}

export default Component;
