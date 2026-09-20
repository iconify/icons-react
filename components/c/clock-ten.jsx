import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj0mgxgzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj0mgxgzu"/>`,
		"fallback": "uis:clock-ten",
	});
}

export default Component;
