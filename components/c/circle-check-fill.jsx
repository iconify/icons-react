import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeoc30bhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aeoc30bhs"/>`,
		"fallback": "akar-icons:circle-check-fill",
	});
}

export default Component;
