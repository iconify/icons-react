import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf5_zmbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uf5_zmbiz"/>`,
		"fallback": "griddy-icons:cloud-off-filled",
	});
}

export default Component;
