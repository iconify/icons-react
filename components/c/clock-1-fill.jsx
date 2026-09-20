import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjls-dbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pjls-dbds"/>`,
		"fallback": "keyline-icons:clock-1-fill",
	});
}

export default Component;
