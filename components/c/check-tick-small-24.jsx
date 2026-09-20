import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od96qpbei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="od96qpbei"/>`,
		"fallback": "qlementine-icons:check-tick-small-24",
	});
}

export default Component;
