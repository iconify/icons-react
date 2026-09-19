import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8dp7db7w.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8dp7db7w"/>`,
		"fallback": "fa6-solid:diagram-project",
	});
}

export default Component;
