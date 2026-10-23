import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6zt-3bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6zt-3bzk"/>`,
		"fallback": "vadivam:funnel-plus",
	});
}

export default Component;
