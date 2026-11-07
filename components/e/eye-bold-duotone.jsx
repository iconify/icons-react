import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noq8vw_6n.css';
import '../../css/k/k7zx50lak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noq8vw_6n"/><path clip-rule="evenodd" class="k7zx50lak"/>`,
		"fallback": "solar:eye-bold-duotone",
	});
}

export default Component;
