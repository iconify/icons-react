import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpv4762am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kpv4762am"/>`,
		"fallback": "iconamoon:3d-fill",
	});
}

export default Component;
