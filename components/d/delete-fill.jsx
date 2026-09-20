import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fru6okbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fru6okbyx"/>`,
		"fallback": "keyline-icons:delete-fill",
	});
}

export default Component;
