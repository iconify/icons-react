import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lep7-fbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lep7-fbld"/>`,
		"fallback": "withicons:badge-check-solid",
	});
}

export default Component;
