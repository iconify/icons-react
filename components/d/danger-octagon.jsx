import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkwx5ib8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkwx5ib8i"/>`,
		"fallback": "mynaui:danger-octagon",
	});
}

export default Component;
