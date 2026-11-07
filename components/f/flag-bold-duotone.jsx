import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq6b85b-a.css';
import '../../css/w/wz-8q9ofo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cq6b85b-a"/><path class="wz-8q9ofo"/>`,
		"fallback": "solar:flag-bold-duotone",
	});
}

export default Component;
