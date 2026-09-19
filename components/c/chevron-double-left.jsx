import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7wx2ab2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7wx2ab2i"/>`,
		"fallback": "mono-icons:chevron-double-left",
	});
}

export default Component;
