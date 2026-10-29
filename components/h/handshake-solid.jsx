import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of_bt5blv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of_bt5blv"/>`,
		"fallback": "withicons:handshake-solid",
	});
}

export default Component;
