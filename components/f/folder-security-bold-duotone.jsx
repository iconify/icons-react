import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl-98b13w.css';
import '../../css/c/cq-7z0vfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl-98b13w"/><path clip-rule="evenodd" class="cq-7z0vfp"/>`,
		"fallback": "solar:folder-security-bold-duotone",
	});
}

export default Component;
