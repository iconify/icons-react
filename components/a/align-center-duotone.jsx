import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9148sb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9148sb4u"/>`,
		"fallback": "si:align-center-duotone",
	});
}

export default Component;
