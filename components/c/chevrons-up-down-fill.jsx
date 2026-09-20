import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnu8uibvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnu8uibvb"/>`,
		"fallback": "keyline-icons:chevrons-up-down-fill",
	});
}

export default Component;
