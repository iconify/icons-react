import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxxzwsd3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxxzwsd3d"/>`,
		"fallback": "mynaui:dice-three-solid",
	});
}

export default Component;
