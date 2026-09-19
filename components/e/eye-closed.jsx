import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7wz_k0tw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7wz_k0tw"/>`,
		"fallback": "boxicons:eye-closed",
	});
}

export default Component;
