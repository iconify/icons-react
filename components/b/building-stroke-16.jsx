import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as14hklrl.css';
import '../../css/x/x-r-buvun.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as14hklrl"/><path class="x-r-buvun"/>`,
		"fallback": "garden:building-stroke-16",
	});
}

export default Component;
