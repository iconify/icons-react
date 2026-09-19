import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1ax2rb3c.css';
import '../../css/z/zsbatf1yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1ax2rb3c"/><path class="zsbatf1yf"/>`,
		"fallback": "boxicons:image-no-background-filled",
	});
}

export default Component;
