import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pteai7udj.css';
import '../../css/k/kvtxzidpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pteai7udj"/><path class="kvtxzidpe"/>`,
		"fallback": "solar:folder-2-bold-duotone",
	});
}

export default Component;
