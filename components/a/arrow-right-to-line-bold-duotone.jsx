import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi3uxcbzc.css';
import '../../css/d/duqz644oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi3uxcbzc"/><path class="duqz644oy"/>`,
		"fallback": "solar:arrow-right-to-line-bold-duotone",
	});
}

export default Component;
