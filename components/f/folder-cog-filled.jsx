import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-64gvbsn.css';
import '../../css/p/pb7wd1b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-64gvbsn"/><path class="pb7wd1b-c"/>`,
		"fallback": "boxicons:folder-cog-filled",
	});
}

export default Component;
