import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anu_as0ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anu_as0ik"/>`,
		"fallback": "tabler:bong-filled",
	});
}

export default Component;
