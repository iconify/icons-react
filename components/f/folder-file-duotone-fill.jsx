import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7zwtsbyj.css';
import '../../css/m/mch1fnkdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="d7zwtsbyj"/><path class="mch1fnkdu"/>`,
		"fallback": "lets-icons:folder-file-duotone-fill",
	});
}

export default Component;
