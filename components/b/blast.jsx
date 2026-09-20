import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhscw0hrm.css';
import '../../css/k/k0dg-7b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhscw0hrm"/><path class="k0dg-7b4a"/>`,
		"fallback": "token:blast",
	});
}

export default Component;
