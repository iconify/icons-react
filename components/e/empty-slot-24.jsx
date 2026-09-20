import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-9-h2b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-9-h2b-s"/>`,
		"fallback": "qlementine-icons:empty-slot-24",
	});
}

export default Component;
