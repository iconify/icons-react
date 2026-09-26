import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf2i7pbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf2i7pbgc"/>`,
		"fallback": "lucide:bangladeshi-taka",
	});
}

export default Component;
