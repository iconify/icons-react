import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjal8vb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjal8vb-e"/>`,
		"fallback": "vadivam:chart-no-axes-column-increasing",
	});
}

export default Component;
