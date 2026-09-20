import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r554d955a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r554d955a"/>`,
		"fallback": "lucide:arrows-up-from-line",
	});
}

export default Component;
