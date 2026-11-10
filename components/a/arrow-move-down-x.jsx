import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrlsc76an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrlsc76an"/>`,
		"fallback": "tabler:arrow-move-down-x",
	});
}

export default Component;
