import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p-e6nbbsd.css';
import '../../css/g/goll4mixz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="p-e6nbbsd"/><path class="goll4mixz"/></g>`,
		"fallback": "feather:film",
	});
}

export default Component;
