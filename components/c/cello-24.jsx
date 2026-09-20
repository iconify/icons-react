import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0l4_3bke.css';
import '../../css/d/d01f2_1py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0l4_3bke"/><path class="d01f2_1py"/>`,
		"fallback": "qlementine-icons:cello-24",
	});
}

export default Component;
