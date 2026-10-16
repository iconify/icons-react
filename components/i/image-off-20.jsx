import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex8t8sbzj.css';
import '../../css/n/nyjz5ihhp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex8t8sbzj"/><path class="nyjz5ihhp"/>`,
		"fallback": "energy-icons:image-off-20",
	});
}

export default Component;
