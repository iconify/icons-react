import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz2vv8csr.css';
import '../../css/z/z0s8mnbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz2vv8csr"/><path class="z0s8mnbxe"/>`,
		"fallback": "boxicons:arrow-down-narrow-wide",
	});
}

export default Component;
