import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_2w7xb1u.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_2w7xb1u"/>`,
		"fallback": "fa6-solid:arrow-up-from-water-pump",
	});
}

export default Component;
