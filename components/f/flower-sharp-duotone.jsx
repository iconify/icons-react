import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whw3bdb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whw3bdb-m"/>`,
		"fallback": "keyline-icons:flower-sharp-duotone",
	});
}

export default Component;
