import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygwp1gb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygwp1gb4r"/>`,
		"fallback": "keyline-icons:clock-5",
	});
}

export default Component;
