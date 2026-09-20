import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhc69fbif.css';
import '../../css/d/dypfpfkbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhc69fbif"/><path class="dypfpfkbv"/>`,
		"fallback": "solar:folder-favourite-star-bold-duotone",
	});
}

export default Component;
