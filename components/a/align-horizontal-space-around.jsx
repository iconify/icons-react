import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh4c86bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh4c86bud"/>`,
		"fallback": "vadivam:align-horizontal-space-around",
	});
}

export default Component;
