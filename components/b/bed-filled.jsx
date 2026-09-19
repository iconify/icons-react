import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aihw6etpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aihw6etpe"/>`,
		"fallback": "boxicons:bed-filled",
	});
}

export default Component;
