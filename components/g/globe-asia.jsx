import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sukwxlkix.css';
import '../../css/y/y5p1me9xe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sukwxlkix"/><path class="y5p1me9xe"/>`,
		"fallback": "boxicons:globe-asia",
	});
}

export default Component;
