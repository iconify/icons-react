import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfn34bccd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfn34bccd"/>`,
		"fallback": "selfhst:immich-dark",
	});
}

export default Component;
