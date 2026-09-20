import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzg4uzwts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tzg4uzwts"/>`,
		"fallback": "keyline-icons:clock-12-fill",
	});
}

export default Component;
