import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p08wz6epf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p08wz6epf"/>`,
		"fallback": "mynaui:anchor-solid",
	});
}

export default Component;
